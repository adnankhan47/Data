const express = require("express");
const { addRoom, getRoomsByHotel } = require("../controllers/roomController");
const router = express.Router();

// Add room route
router.post("/", addRoom);

// Get rooms by hotel route
router.get("/hotel/:hotelId", getRoomsByHotel);

module.exports = router;
