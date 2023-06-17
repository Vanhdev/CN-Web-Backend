const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminControllers/adminController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// places
router.post("/add-place", upload.single("image"), adminController.addPlace);
router.get("/get-place", adminController.getPlace);
router.delete("/delete-place", adminController.deletePlace);
router.put("/edit-place", adminController.updatePlace);

// type tour
router.post("/add-type", adminController.addTypeTour);
router.put("/edit-type", adminController.updateType);
router.get("/get-type", adminController.getTypeTour);

// service tour
router.post("/add-service", adminController.addService);
router.get("/get-service", adminController.getService);
router.delete("/delete-service", adminController.deleteService);
router.put("/edit-service", adminController.editService);

// voucher tour
router.post("/add-voucher", adminController.addVoucher);
router.get("/get-voucher", adminController.getVoucher);
router.delete("/delete-voucher", adminController.deleteVoucher);
router.put("/edit-voucher", adminController.editVoucher);

// tour
router.post("/add-tour", upload.single("image"), adminController.addTour);
router.get("/get-tour", adminController.getTour);
router.put("/edit-tour", adminController.editTour);
router.delete("/delete-tour", adminController.deleteTour);

// qas
router.put("/ans-qas", adminController.answerQuestion);
router.delete("/delete-qas", adminController.deleteQAS);

// post
router.put("/handle-post", adminController.handleRequestPost);

// arrival
router.post("/add-arrival", adminController.addArrival);
router.get("/get-arrival", adminController.getArrival);

module.exports = router;
