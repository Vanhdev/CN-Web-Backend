const db = require("../../models/index");

const getUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = "";
      if (userId) {
        user = await db.users.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
        resolve(user);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateUserByEmail = (userUpdate) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.users.findOne({
        where: { email: userUpdate.email },
        attributes: {
          exclude: ["password"],
        },
        raw: false,
      });

      if (user) {
        user.name = userUpdate.name;
        user.phone_number = userUpdate.phone_number
          ? userUpdate.phone_number
          : user.phone_number;
        user.date_of_birth = userUpdate.date_of_birth
          ? userUpdate.date_of_birth
          : user.date_of_birth;
        await user.save();
        resolve({
          message: "Update successfully",
          user: user,
        });
      } else {
        resolve({
          message: "User not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getUserById, updateUserByEmail };
