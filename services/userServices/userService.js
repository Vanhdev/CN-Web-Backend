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

const handleCreatePost = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        const newPost = await db.posts.create({
          title: data?.title,
          content: data?.content,
          status: "false",
        });
        resolve({
          message: "Create post successfully",
          newPost,
        });
      } else {
        resolve({
          message: "Missing required parameter",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleGetPost = (postId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (postId.toLowerCase() === "all") {
        const allPosts = await db.posts.findAll();
        resolve(allPosts);
      } else {
        const post = await db.posts.findOne({
          where: { id: postId },
        });

        if (!post) {
          resolve({
            message: "Post not found",
          });
        }

        resolve({
          message: "OK",
          post,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleUpdatePost = (postId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.posts.findOne({
        where: { id: postId },
        raw: false,
      });

      if (post) {
        post.title = data.title ? data.title : post.title;
        post.content = data.content ? data.content : post.content;

        await post.save();
        resolve({
          message: "Update successfully",
          post,
        });
      } else {
        resolve({
          message: "Post not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleDeletePost = (postId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.posts.findOne({
        where: { id: postId },
        raw: false,
      });

      if (post) {
        const comments = await db.comments.findAll({
          where: { post_id: Number(postId) },
        });
        if (!comments || comments.length === 0) {
          await post.destroy();
          resolve({
            message: "Delete post successfully",
          });
        } else {
          await db.comments.destroy({
            where: { post_id: Number(postId) },
          });

          await post.destroy();
          resolve({
            message: "Delete post successfully",
          });
        }
      } else {
        resolve({
          message: "Post not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleAddQAS = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        const newQuestion = await db.qas.create({
          question: data?.question,
          user_id: data?.user_id,
        });
        resolve({
          message: "Create question successfully",
          newQuestion,
        });
      } else {
        resolve({
          message: "Missing required parameter",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleGetQuestion = (idQAS) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (idQAS.toLowerCase() === "all") {
        const allQAS = await db.qas.findAll();
        resolve(allQAS);
      } else {
        const question = await db.qas.findOne({
          where: { id: idQAS },
        });

        if (!question) {
          resolve({
            message: "Question not found",
          });
        }

        resolve({
          message: "OK",
          question,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleAddComment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        const newCmt = await db.comments.create(
          {
            post_id: data?.post_id,
            user_id: data?.user_id,
            content: data?.content,
          }
          // {
          //   fields: ["post_id", "user_id", "content"], // Exclude the 'id' field
          // }
        );
        resolve({
          message: "Create comment successfully",
          newCmt,
        });
      } else {
        resolve({
          message: "Missing required parameter",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleGetCommentOfPost = (idPost) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.posts.findOne({
        where: { id: Number(idPost) },
      });

      if (post) {
        const comments = await db.comments.findAll({
          where: { post_id: Number(idPost) },
        });

        if (!comments || comments.length === 0) {
          resolve({
            message: "Post doesn't have any comment",
          });
        }

        resolve({
          message: "OK",
          comments,
        });
      } else {
        resolve({
          message: "Post not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleDeleteComment = (idCmt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const comment = await db.comments.findOne({
        where: { id: idCmt },
        raw: false,
      });

      if (comment) {
        await comment.destroy();
        resolve({
          message: "Delete comment successfully",
        });
      } else {
        resolve({
          message: "Comment not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleUpdateComment = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const comment = await db.comments.findOne({
        where: { id: id },
        raw: false,
      });

      if (comment) {
        comment.content = data.content ? data.content : comment.content;
        await comment.save();
        resolve({
          message: "Update successfully",
          comment,
        });
      } else {
        resolve({
          message: "Comment not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getUserById,
  updateUserByEmail,
  handleCreatePost,
  handleGetPost,
  handleUpdatePost,
  handleDeletePost,
  handleAddQAS,
  handleGetQuestion,
  handleAddComment,
  handleGetCommentOfPost,
  handleDeleteComment,
  handleUpdateComment,
};
