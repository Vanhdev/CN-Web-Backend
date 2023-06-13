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
        voucher: newVoucher,
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

const handleAddTour = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newTour = await db.tours.create({
        type_id: data.type_id,
        name: data.name,
        overview: data.overview,
        highlight: data.highlight,
        start_date: data.start_date,
        duration: data.duration,
        slots: data.slots,
        price: data.price,
        status: data.status,
        booking_deadline: data.booking_deadline,
      });
      resolve({
        message: "Create tour successfully",
        tour: newTour,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const handleGetTour = (tourId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const tour = await db.tours.findOne({
        where: { id: tourId },
      });

      if (!tour) {
        resolve({
          message: "Tour not found",
        });
      }

      resolve({
        message: "OK",
        tour,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const handleEditTour = (idTour, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const tour = await db.tours.findOne({
        where: { id: idTour },
        raw: false,
      });

      if (tour) {
        (tour.type_id = data.type_id ? data.type_id : tour.type_id),
          (tour.name = data.name ? data.name : tour.name),
          (tour.overview = data.overview ? data.overview : tour.overview),
          (tour.highlight = data.highlight ? data.highlight : tour.highlight),
          (tour.start_date = data.start_date
            ? data.start_date
            : tour.start_date),
          (tour.duration = data.duration ? data.duration : tour.duration),
          (tour.slots = data.slots ? data.slots : tour.slots),
          (tour.price = data.price ? data.price : tour.price),
          (tour.status = data.status ? data.status : tour.status),
          (tour.booking_deadline = data.booking_deadline
            ? data.booking_deadline
            : tour.booking_deadline),
          await tour.save();
        resolve({
          message: "Update successfully",
          tour,
        });
      } else {
        resolve({
          message: "Tour not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleDeleteTour = (idTour) => {
  return new Promise(async (resolve, reject) => {
    try {
      const tour = await db.tours.findOne({
        where: { id: idTour },
        raw: false,
      });

      if (tour) {
        await tour.destroy();
        resolve({
          message: "Delete tour successfully",
        });
      } else {
        resolve({
          message: "Tour not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleAnswerQAS = (idQAS, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const question = await db.qas.findOne({
        where: { id: idQAS },
        raw: false,
      });

      if (question) {
        question.answer = data.answer ? data.answer : question.answer;
        await question.save();
        resolve({
          message: "Answer successfully",
          question,
        });
      } else {
        resolve({
          message: "Question not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleDeleteQAS = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const qas = await db.qas.findOne({
        where: { id: id },
        raw: false,
      });

      if (qas) {
        await qas.destroy();
        resolve({
          message: "Delete qas successfully",
        });
      } else {
        resolve({
          message: "Qas not found",
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
  handleAddTour,
  handleGetTour,
  handleEditTour,
  handleDeleteTour,
  handleAnswerQAS,
  handleDeleteQAS,
};
