var express = require("express");
const userController = require("../controllers/userControllers/userController");
const mockController = require("../controllers/mockDataController");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// mock user
router.post("/add-mul-user", mockController.bulkUser);

router.get("/get-user", userController.getUserInfo);
router.put("/update-user", userController.updateUser);

// mock post
router.post("/add-mul-post", mockController.bulkPost);

// post
router.post("/add-post", userController.createPost);
router.get("/get-post", userController.getPost);
router.put("/update-post", userController.updatePost);
router.delete("/delete-post", userController.deletePost);

// mock qas
router.post("/add-mul-qas", mockController.bulkQAS);

// qas
router.post("/add-qas", userController.createQAS);
router.get("/get-question", userController.getQuestion);

// mock comment
router.post("/add-mul-cmt", mockController.bulkComment);

// comment
router.post("/add-comment", userController.addComment);
router.get("/get-comment", userController.getCommentOfPost);
router.delete("/delete-comment", userController.deleteComment);
router.put("/edit-comment", userController.updateComment);

// rate
router.post("/add-rate", userController.addRateTOur);
router.get("/get-rate", userController.getRateByTour);
router.delete("/delete-rate", userController.deleteRate);
router.put("/edit-rate", userController.editRate);

// favorite tour
router.post("/add-fav-tour", userController.addFavTour);
router.get("/get-fav-tour", userController.getFavTourOfUser);
router.delete("/delete-fav-tour", userController.deleteFavTour);

module.exports = router;
