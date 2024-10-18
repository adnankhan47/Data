const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Booking = require("./booking");

const Payment = sequelize.define("Payment", {
  bookingId: {
    type: DataTypes.INTEGER,
    references: {
      model: Booking,
      key: "id",
    },
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Payment;
