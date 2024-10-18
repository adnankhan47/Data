const express = require("express");
const paymentController = require("../controllers/paymentController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Create a payment
router.post("/", authMiddleware, paymentController.createPayment);

// Get payment details for a booking
router.get("/:bookingId", authMiddleware, paymentController.getPaymentDetails);

module.exports = router;
