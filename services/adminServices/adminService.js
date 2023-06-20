const db = require("../../models/index");
const user_booking_tour = require("../../models/user_booking_tour");

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

const getTypeTourById = (typeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (typeId.toLowerCase() === "all") {
        const allTypes = await db.types.findAll();
        resolve(allTypes);
      } else {
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
      }
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
      if (serviceId.toLowerCase() === "all") {
        const allServices = await db.services.findAll();
        resolve(allServices);
      } else {
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
      }
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
        await db.tour_service.destroy({
          where: { service_id: serviceId },
        });

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
      if (voucherId.toLowerCase() === "all") {
        const allVoucher = await db.vouchers.findAll();
        resolve(allVoucher);
      } else {
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
      }
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
        await db.tour_voucher.destroy({
          where: { voucher_id: voucherId },
        });

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

      // add place for tour
      await db.tour_place.create(
        {
          tour_id: newTour.id,
          place_id: Number(data.placeId),
        },
        {
          fields: ["tour_id", "place_id"],
        }
      );

      // add service for tour
      await db.tour_service.create(
        {
          tour_id: newTour.id,
          service_id: Number(data.serviceId),
        },
        {
          fields: ["tour_id", "service_id"],
        }
      );

      // add voucher for tour
      await db.tour_voucher.create(
        {
          voucher_id: Number(data.voucherId),
          tour_id: newTour.id,
        },
        {
          fields: ["voucher_id", "tour_id"],
        }
      );

      // choose arrival
      await db.tour_arrival.create(
        {
          arrival_id: Number(data.arrivalId),
          tour_id: newTour.id,
        },
        {
          fields: ["arrival_id", "tour_id"],
        }
      );

      // add img
      const newImg = await db.images.create({
        image_url: data.image,
      });
      await db.image_tour.create(
        {
          tour_id: newTour.id,
          image_id: newImg.id,
        },
        {
          fields: ["image_id", "tour_id"],
        }
      );

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
      if (tourId.toLowerCase() === "all") {
        const allTours = await db.tours.findAll();
        resolve(allTours);
      } else {
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
      }
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
        await db.tour_place.destroy({
          where: { tour_id: idTour },
        });
        await db.tour_voucher.destroy({
          where: { tour_id: idTour },
        });
        await db.tour_service.destroy({
          where: { tour_id: idTour },
        });
        await db.tour_arrival.destroy({
          where: { tour_id: idTour },
        });
        await db.user_booking_tour.destroy({
          where: { tour_id: idTour },
        });
        await db.user_favorite_tour.destroy({
          where: { tour_id: idTour },
        });
        await db.rates.destroy({
          where: { tour_id: idTour },
        });

        await db.image_tour.destroy({
          where: { tour_id: idTour },
        });

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

const adminHandleReqPost = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.posts.findOne({
        where: { id: id },
        raw: false,
      });

      if (post) {
        post.status = data.status ? data.status : post.status;
        await post.save();
        resolve({
          message: "Handle request successfully",
          post,
        });
      } else {
        resolve({
          message: "Post not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleAddPlace = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newPlace = await db.places.create({
        name: data.name,
        description: data.description,
      });

      const newImgPlace = await db.images.create({
        image_url: data.image,
      });
      await db.image_place.create(
        {
          image_id: newImgPlace.id,
          place_id: newPlace.id,
        },
        {
          fields: ["image_id", "place_id"],
        }
      );

      resolve({
        message: "Create tour successfully",
        place: newPlace,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const handleGetPlace = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id.toLowerCase() === "all") {
        const allPlaces = await db.places.findAll();
        resolve(allPlaces);
      } else {
        const place = await db.places.findOne({
          where: { id: id },
        });

        if (!place) {
          resolve({
            message: "Place not found",
          });
        }

        resolve({
          message: "OK",
          place,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleDeletePlace = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const place = await db.places.findOne({
        where: { id: id },
        raw: false,
      });

      if (place) {
        await db.tour_place.destroy({
          where: { place_id: id },
        });

        await db.image_place.destroy({
          where: { place_id: id },
        });

        await place.destroy();
        resolve({
          message: "Delete place successfully",
        });
      } else {
        resolve({
          message: "Place not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleEditPlace = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const place = await db.places.findOne({
        where: { id: id },
        raw: false,
      });

      if (place) {
        place.name = data.name ? data.name : place.name;
        place.description = data.description
          ? data.description
          : place.description;
        await place.save();
        resolve({
          message: "Update successfully",
          place,
        });
      } else {
        resolve({
          message: "Place not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleAddArrival = (time) => {
  return new Promise(async (resolve, reject) => {
    try {
      const arrival = await db.arrivals.create({
        arrival_at: time,
      });
      resolve({
        message: "Create tour successfully",
        arrival: arrival,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const handleGetArrival = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id.toLowerCase() === "all") {
        const allArrivals = await db.arrivals.findAll();
        resolve(allArrivals);
      } else {
        const arrival = await db.arrivals.findOne({
          where: { id: id },
        });

        if (!arrival) {
          resolve({
            message: "Arrival not found",
          });
        }

        resolve({
          message: "OK",
          arrival,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleCountTours = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const count = await db.tours.count();

      if (count) {
        resolve({
          message: "OK",
          count,
        });
      } else {
        resolve({
          message: "Cannot count tours",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const countTours = (tours) => {
    var count = 0
    
    console.log(count);
    return count;
}
const handleCountBookingTours = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const count = await db.user_booking_tour.count(
        {
          distinct: true,
          col: 'tour_id'
        }
      );
      if (count) {
        resolve({
          message: "OK",
          booking_tours_count: count,
        });
      } else {
        resolve({
          message: "Cannot count booking tours",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
const handleCountUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const count = await db.users.count();

      if (count) {
        resolve({
          message: "OK",
          users_count: count,
        });
      } else {
        resolve({
          message: "Cannot find and count users",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleCountProfits = () => {
  return new Promise(async (resolve, reject) => {
    try {
      
      const tours = await db.tours.findAll();
      const user_booking_tours = await db.user_favorite_tour.findAll({
        attributes: { exclude: ["id"] },
      });
      setTimeout(()=> {
        if (tours && user_booking_tours) {
          console.log(tours);
          console.log(user_booking_tours);
          var profits = 0;
          user_booking_tours.forEach(user_booking_tour => {
            tours.forEach(tour => {
              if(user_booking_tour.tour_id === tour.id) profits += tour.price;
            });
          });
          resolve({
            message: "OK",
            profits,
          });
        } else {
          resolve({
            message: "Cannot count profits",
          });
        }
      }, 500);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  creatTypeTour,
  updateType,
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
  adminHandleReqPost,
  handleAddPlace,
  handleGetPlace,
  handleDeletePlace,
  handleEditPlace,
  handleAddArrival,
  handleGetArrival,
  handleCountTours,
  handleCountBookingTours,
  handleCountUsers,
  handleCountProfits
};
