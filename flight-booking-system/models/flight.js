const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Flight = sequelize.define("Flight", {
  flightNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departureTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  arrivalTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Flight;
