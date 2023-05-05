var express = require("express");
const userController = require("../controllers/userControllers/userController");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/get-user", userController.getUserInfo);
router.put("/update-user", userController.updateUser);

module.exports = router;
