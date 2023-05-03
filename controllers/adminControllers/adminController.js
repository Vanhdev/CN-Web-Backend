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

const addService = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(500).json("Missing required parameter");
  }
  const result = await adminService.addServiceTour(name, description);
  return res.status(200).json(result);
};

const getService = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required parameter",
    });
  }
  const result = await adminService.getServiceAdmin(req.query.id);
  return res.status(200).json(result);
};

const deleteService = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required paramter",
    });
  }
  const result = await adminService.deleteServiceAdmin(req.query.id);
  return res.status(200).json(result);
};

const editService = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      message: "Missing required paramter",
    });
  }

  const data = req.body;
  const result = await adminService.editServiceAdmin(req.query.id, data);

  return res.status(200).json(result);
};

module.exports = {
  addTypeTour,
  updateType,
  deleteType,
  getTypeTour,
  addService,
  getService,
  deleteService,
  editService,
};
