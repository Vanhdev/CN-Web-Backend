const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user_booking_tour",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      tour_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "tours",
          key: "id",
        },
      },
      booking_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      arrival_day: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      arrival_time: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "user_booking_tour",
      timestamps: false,
      indexes: [
        {
          name: "user_id",
          using: "BTREE",
          fields: [{ name: "user_id" }],
        },
        {
          name: "tour_id",
          using: "BTREE",
          fields: [{ name: "tour_id" }],
        },
      ],
    }
  );
};
