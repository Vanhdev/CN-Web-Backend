<<<<<<<< HEAD:models/user_booking_tour.js
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_booking_tour', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    tour_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tours',
        key: 'id'
      }
    },
    booking_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    arrival_day: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    arrival_time: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_booking_tour',
    timestamps: false,
    indexes: [
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "tour_id",
        using: "BTREE",
        fields: [
          { name: "tour_id" },
        ]
      },
    ]
  });
========
const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user_bookinng_tour",
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
    },
    {
      sequelize,
      tableName: "user_bookinng_tour",
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
>>>>>>>> 09693b4fb91aeef8f18dc367d7f525ea2cef12b3:models/user_bookinng_tour.js
};
