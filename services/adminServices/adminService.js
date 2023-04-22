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

module.exports = { creatTypeTour, updateType, deleteType, getTypeTourById };
