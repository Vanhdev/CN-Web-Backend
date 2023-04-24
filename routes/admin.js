const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminControllers/adminController");

router.post("/add-type", adminController.addTypeTour);
router.put("/edit-type", adminController.updateType);
router.delete("/delete-type", adminController.deleteType);
router.get("/get-type", adminController.getTypeTour);

module.exports = router;
