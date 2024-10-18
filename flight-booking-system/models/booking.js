const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Flight = require("./flight");
const User = require("./user");

const Booking = sequelize.define("Booking", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
    allowNull: false,
  },
  flightId: {
    type: DataTypes.INTEGER,
    references: {
      model: Flight,
      key: "id",
    },
    allowNull: false,
  },
  seatsBooked: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Booking;
