const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminControllers/adminController");

// type tour
router.post("/add-type", adminController.addTypeTour);
router.put("/edit-type", adminController.updateType);
router.delete("/delete-type", adminController.deleteType);
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
router.post("/add-tour", adminController.addTour);
router.get("/get-tour", adminController.getTour);
router.put("/edit-tour", adminController.editTour);
router.delete("/delete-tour", adminController.deleteTour);

module.exports = router;
