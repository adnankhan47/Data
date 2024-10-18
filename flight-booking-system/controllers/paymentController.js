const Payment = require("../models/payment");
const Booking = require("../models/booking");

exports.createPayment = async (req, res) => {
  const { bookingId, amount, paymentMethod } = req.body;

  try {
    const booking = await Booking.findByPk(bookingId);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    const payment = await Payment.create({
      bookingId,
      amount,
      paymentMethod,
      paymentStatus: "Completed", // Set status based on actual payment processing
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPaymentDetails = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const payment = await Payment.findOne({ where: { bookingId } });
    if (!payment) return res.status(404).json({ message: "Payment not found" });

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
