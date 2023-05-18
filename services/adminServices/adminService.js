const db = require("../../models/index");

const creatTypeTour = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        const newType = await db.types.create({
          name: data,
        });
        resolve({
          message: "Create type successfully",
          newType,
        });
      } else {
        resolve({
          message: "Missing required parameter",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateType = (typeId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const type = await db.types.findOne({
        where: { id: typeId },
        raw: false,
      });

      if (type) {
        type.name = data.name ? data.name : type.name;

        await type.save();
        resolve({
          message: "Update successfully",
          type,
        });
      } else {
        resolve({
          message: "Type not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteType = (typeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const type = await db.types.findOne({
        where: { id: typeId },
        raw: false,
      });

      if (type) {
        await type.destroy();
        resolve({
          message: "Delete type successfully",
        });
      } else {
        resolve({
          message: "Type not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getTypeTourById = (typeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const type = await db.types.findOne({
        where: { id: typeId },
      });

      if (!type) {
        resolve({
          message: "Type not found",
        });
      }

      resolve({
        message: "OK",
        type,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const addServiceTour = (name, description) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newService = await db.services.create({ name, description });
      resolve({
        message: "Create service successfully",
        service: newService,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getServiceAdmin = (serviceId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const service = await db.services.findOne({
        where: { id: serviceId },
      });

      if (!service) {
        resolve({
          message: "Service not found",
        });
      }

      resolve({
        message: "OK",
        service,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteServiceAdmin = (serviceId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const service = await db.services.findOne({
        where: { id: serviceId },
        raw: false,
      });

      if (service) {
        await service.destroy();
        resolve({
          message: "Delete service successfully",
        });
      } else {
        resolve({
          message: "Service not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const editServiceAdmin = (serviceId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const service = await db.services.findOne({
        where: { id: serviceId },
        raw: false,
      });

      if (service) {
        service.name = data.name ? data.name : service.name;
        service.description = data.description
          ? data.description
          : service.description;
        await service.save();
        resolve({
          message: "Update successfully",
          service,
        });
      } else {
        resolve({
          message: "Service not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const addVoucerAdmin = (name, discount) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newVoucher = await db.vouchers.create({ name, discount });
      resolve({
        message: "Create voucher successfully",
        service: newVoucher,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getVoucherAdmin = (voucherId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const voucher = await db.vouchers.findOne({
        where: { id: voucherId },
      });

      if (!voucher) {
        resolve({
          message: "Voucher not found",
        });
      }

      resolve({
        message: "OK",
        voucher,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteVoucherAdmin = (voucherId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const voucher = await db.vouchers.findOne({
        where: { id: voucherId },
        raw: false,
      });

      if (voucher) {
        await voucher.destroy();
        resolve({
          message: "Delete voucher successfully",
        });
      } else {
        resolve({
          message: "Voucher not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const editVoucherAdmin = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const voucher = await db.vouchers.findOne({
        where: { id: id },
        raw: false,
      });

      if (voucher) {
        voucher.name = data.name ? data.name : voucher.name;
        voucher.discount = data.discount ? data.discount : voucher.discount;
        await voucher.save();
        resolve({
          message: "Update successfully",
          voucher,
        });
      } else {
        resolve({
          message: "Voucher not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  creatTypeTour,
  updateType,
  deleteType,
  getTypeTourById,
  addServiceTour,
  getServiceAdmin,
  deleteServiceAdmin,
  editServiceAdmin,
  addVoucerAdmin,
  getVoucherAdmin,
  deleteVoucherAdmin,
  editVoucherAdmin,
};
