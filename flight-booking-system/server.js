const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// HTTP Method	URL	Request Body
// GET	/api/flights	None
// GET	/api/flights/search	None (Query Params: departure, destination, date)
// POST	/api/flights	Flight details
// PUT	/api/flights/
// Updated flight details
// DELETE	/api/flights/
// None
// POST	/api/bookings	Flight ID and seats booked
// GET	/api/bookings	None
// DELETE	/api/bookings/
// None
// POST	/api/payments	Booking ID, amount, and payment method
// GET	/api/payments/
// None
