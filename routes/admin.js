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

module.exports = router;
