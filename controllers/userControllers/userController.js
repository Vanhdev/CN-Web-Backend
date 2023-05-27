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

const createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(200).json({
      message: "Missing reuired parameter",
    });
  const data = { title, content };
  const result = await userService.handleCreatePost(data);
  return res.status(200).json(result);
};

const getPost = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required parameter",
    });
  }

  const result = await userService.handleGetPost(req.query.id);
  return res.status(200).json(result);
};

const updatePost = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required paramter",
    });
  }
  const data = req.body;
  const result = await userService.handleUpdatePost(Number(req.query.id), data);

  return res.status(200).json(result);
};

const deletePost = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required paramter",
    });
  }
  const result = await userService.handleDeletePost(req.query.id);
  return res.status(200).json(result);
};

module.exports = {
  getUserInfo,
  updateUser,
  createPost,
  getPost,
  updatePost,
  deletePost,
};
