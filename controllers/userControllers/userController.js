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

const createQAS = async (req, res) => {
  const { question, user_id } = req.body;
  if (!question || !user_id)
    return res.status(200).json({
      message: "Missing reuired parameter",
    });
  const data = { question, user_id };
  const result = await userService.handleAddQAS(data);
  return res.status(200).json(result);
};

const getQuestion = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required parameter",
    });
  }

  const result = await userService.handleGetQuestion(req.query.id);
  return res.status(200).json(result);
};

const addComment = async (req, res) => {
  const { post_id, user_id, content } = req.body;
  if (!post_id || !user_id || !content)
    return res.status(200).json({
      message: "Missing reuired parameter",
    });
  const data = { content, user_id, post_id };
  const result = await userService.handleAddComment(data);
  return res.status(200).json(result);
};

const getCommentOfPost = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required parameter",
    });
  }

  const result = await userService.handleGetCommentOfPost(req.query.id);
  return res.status(200).json(result);
};

const deleteComment = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required paramter",
    });
  }
  const result = await userService.handleDeleteComment(req.query.id);
  return res.status(200).json(result);
};

const updateComment = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required paramter",
    });
  }
  const data = req.body;
  const result = await userService.handleUpdateComment(
    Number(req.query.id),
    data
  );

  return res.status(200).json(result);
};

module.exports = {
  getUserInfo,
  updateUser,
  createPost,
  getPost,
  updatePost,
  deletePost,
  createQAS,
  getQuestion,
  addComment,
  getCommentOfPost,
  deleteComment,
  updateComment,
};
