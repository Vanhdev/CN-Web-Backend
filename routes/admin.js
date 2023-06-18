const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminControllers/adminController");
const multer = require("multer");
const { checkAdmin, checkToken } = require("../middleware/middleware");
const upload = multer({ dest: "uploads/" });

// places
router.post(
  "/add-place",
  checkAdmin,
  upload.single("image"),
  adminController.addPlace
);
router.get("/get-place", adminController.getPlace);
router.delete("/delete-place", checkAdmin, adminController.deletePlace);
router.put("/edit-place", checkAdmin, adminController.updatePlace);

// type tour
router.post("/add-type", checkAdmin, adminController.addTypeTour);
router.put("/edit-type", checkToken, adminController.updateType);
router.get("/get-type", checkToken, adminController.getTypeTour);

// service tour
router.post("/add-service", checkAdmin, adminController.addService);
router.get("/get-service", checkToken, adminController.getService);
router.delete("/delete-service", checkAdmin, adminController.deleteService);
router.put("/edit-service", checkAdmin, adminController.editService);

// voucher tour
router.post("/add-voucher", checkAdmin, adminController.addVoucher);
router.get("/get-voucher", checkToken, adminController.getVoucher);
router.delete("/delete-voucher", checkAdmin, adminController.deleteVoucher);
router.put("/edit-voucher", checkAdmin, adminController.editVoucher);

// tour
router.post(
  "/add-tour",
  checkAdmin,
  upload.single("image"),
  adminController.addTour
);
router.get("/get-tour", adminController.getTour);
router.put("/edit-tour", checkAdmin, adminController.editTour);
router.delete("/delete-tour", checkAdmin, adminController.deleteTour);

// qas
router.put("/ans-qas", checkAdmin, adminController.answerQuestion);
router.delete("/delete-qas", checkAdmin, adminController.deleteQAS);

// post
router.put("/handle-post", checkAdmin, adminController.handleRequestPost);

// arrival
router.post("/add-arrival", adminController.addArrival);
router.get("/get-arrival", adminController.getArrival);

module.exports = router;
