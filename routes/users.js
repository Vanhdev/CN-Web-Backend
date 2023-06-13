var express = require("express");
const userController = require("../controllers/userControllers/userController");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/get-user", userController.getUserInfo);
router.put("/update-user", userController.updateUser);

// post
router.post("/add-post", userController.createPost);
router.get("/get-post", userController.getPost);
router.put("/update-post", userController.updatePost);
router.delete("/delete-post", userController.deletePost);

// qas
router.post("/add-qas", userController.createQAS);
router.get("/get-question", userController.getQuestion);

module.exports = router;
