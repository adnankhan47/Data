const express = require("express");
const {
  createBooking,
  getUserBookings,
} = require("../controllers/bookingController");
const router = express.Router();

// Create booking route
router.post("/", createBooking);

// Get bookings by user route
router.get("/user/:userId", getUserBookings);

module.exports = router;
