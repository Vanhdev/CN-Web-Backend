const authService = require('../services/authService');

const registerUser = async (req, res) => {
    const result = await authService.createNewUser(req.body);
    return res.status(200).json(result);
}

const loginUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json('Missing required parameters');
    }

    let userData = await authService.handleLogin(email, password);

    return res.status(200).json({
        message: userData.message,
        user: userData.user
    })
}

module.exports = { registerUser, loginUser }