const userService = require("../../services/userServices/userService");

const getUserInfo = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.status(200).json({
      message: "Missing required parameters",
    });
  }

  let user = await userService.getUserById(id);
  if (user) {
    return res.status(200).json({
      message: "OK",
      user: user,
    });
  } else {
    return res.status(200).json({
      message: "User not exist",
    });
  }
};

const updateUser = async (req, res) => {
  if (!req.body.email) {
    return res.status(200).json({
      message: "Missing required parameter",
    });
  }
  let data = req.body;
  let result = await userService.updateUserByEmail(data);
  return res.status(200).json(result);
};

module.exports = { getUserInfo, updateUser };
