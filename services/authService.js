const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models/index');

const generateAccessToken = (user) => {
    return jwt.sign({
        data: user
    }, process.env.JWT_ACCESS_KEY, { expiresIn: '3h' })
}

const checkEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.users.findOne({
                where: {
                    email: email
                }, raw: true
            });

            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    })
}

const handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {};
            let checkUserExist = await checkEmail(email);
            if (checkUserExist) {
                let user = await db.users.findOne({
                    where: {
                        email: email,
                    }, raw: true
                });

                if (user) {
                    let checkPassword = await bcrypt.compare(password, user?.password);
                    if (checkPassword) {
                        const accessToken = generateAccessToken(user);
                        data.message = 'OK';
                        const { password, ...otherField } = user;
                        data.user = { ...otherField, accessToken };
                    } else {
                        data.message = 'Wrong password'
                    }
                } else {
                    data.message = 'Your email does not exist'
                }
            } else {
                data.message = 'Your email does not exist'
            }
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

const createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data.email === null || data.email === '') {
                resolve('Missing required email')
            }

            if (data.name === null || data.name === '') {
                resolve('Missing required name')
            }

            if (data.password === null || data.password === '') {
                resolve('Missing required password')
            }

            let check = await checkEmail(data.email);
            if (check == true) {
                resolve('Email has been used')
            } else {
                const salt = await bcrypt.genSalt(10);
                let hashPassword = await bcrypt.hash(data.password, salt);
                const newUser = await db.users.create({
                    name: data.name,
                    email: data.email,
                    password: hashPassword,
                    phone_number: data.phone_number,
                    date_of_birth: data.date_of_birth
                });

                resolve({
                    message: 'Create new user successfully',
                    user: newUser
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { handleLogin, createNewUser }
