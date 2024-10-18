const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();

// Get all flights
router.get("/", flightController.getAllFlights);

// Search flights
router.get("/search", flightController.searchFlights);

// Create a new flight
router.post("/", flightController.createFlight);

// Update flight details
router.put("/:id", flightController.updateFlight);

// Delete a flight
router.delete("/:id", flightController.deleteFlight);

module.exports = router;
