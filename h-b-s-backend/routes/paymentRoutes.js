const express = require("express");
const { processPayment } = require("../controllers/paymentController");
const router = express.Router();

// Process payment route
router.post("/", processPayment);

module.exports = router;
