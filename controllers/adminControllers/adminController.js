const adminService = require("../../services/adminServices/adminService");

const addTypeTour = async (req, res) => {
  const nameType = req.body.name;
  const result = await adminService.creatTypeTour(nameType);
  return res.status(200).json(result);
};

const updateType = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required paramter",
    });
  }
  const data = req.body;
  const result = await adminService.updateType(Number(req.query.id), data);

  return res.status(200).json(result);
};

const deleteType = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required paramter",
    });
  }
  const result = await adminService.deleteType(req.query.id);
  return res.status(200).json(result);
};

const getTypeTour = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required parameter",
    });
  }

  const result = await adminService.getTypeTourById(req.query.id);
  return res.status(200).json(result);
};

module.exports = { addTypeTour, updateType, deleteType, getTypeTour };
