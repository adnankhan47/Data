const express = require("express");
const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Create a booking
router.post("/", authMiddleware, bookingController.createBooking);

// Get bookings for a user
router.get("/", authMiddleware, bookingController.getUserBookings);

// Cancel a booking
router.delete("/:id", authMiddleware, bookingController.cancelBooking);

module.exports = router;
