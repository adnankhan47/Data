const Payment = require("../models/Payment");

let payments = []; // In-memory payment storage (replace with database logic)

exports.processPayment = (req, res) => {
  const { bookingId, amount, paymentMethod } = req.body;
  const newPayment = new Payment(
    payments.length + 1,
    bookingId,
    amount,
    paymentMethod,
    "Completed"
  );
  payments.push(newPayment);
  res
    .status(201)
    .json({ message: "Payment processed successfully", payment: newPayment });
};
