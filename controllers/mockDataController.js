const db = require("../models/index");

const bulkUser = async (req, res) => {
  try {
    // console.log(JSON.parse(req.body));
    const data = req.body.map((user) => ({
      name: user.name,
      email: user.email,
      password: user.password,
      phone_number: user.phone_number,
      date_of_birth: user.date_of_birth,
    }));

    const users = await db.users.bulkCreate(data);
    console.log(users);
    return res.status(200).json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const bulkPost = async (req, res) => {
  try {
    const data = req.body.map((post) => ({
      title: post.title,
      content: post.content,
      user_id: post.user_id,
      status: post.status,
    }));
    await db.posts.bulkCreate(data);
    return res.status(200).json("ok");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const bulkQAS = async (req, res) => {
  try {
    const data = req.body.map((qas) => ({
      question: qas.question,
      answer: qas.answer,
      user_id: qas.user_id,
    }));
    await db.qas.bulkCreate(data);
    return res.status(200).json("ok");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const bulkComment = async (req, res) => {
  try {
    const data = req.body.map((comment) => ({
      user_id: comment.user_id,
      post_id: comment.post_id,
      content: comment.content,
    }));
    await db.comments.bulkCreate(data);
    return res.status(200).json("ok");
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { bulkUser, bulkPost, bulkQAS, bulkComment };