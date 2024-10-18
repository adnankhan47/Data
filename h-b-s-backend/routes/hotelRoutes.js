const express = require("express");
const { addHotel, getAllHotels } = require("../controllers/hotelController");
const router = express.Router();

// Add hotel route
router.post("/", addHotel);

// Get all hotels route
router.get("/", getAllHotels);

module.exports = router;
