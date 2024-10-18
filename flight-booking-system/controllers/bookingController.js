const Booking = require("../models/booking");
const Flight = require("../models/flight");

exports.createBooking = async (req, res) => {
  const { flightId, seatsBooked } = req.body;
  const userId = req.user.id; // Get user ID from middleware

  try {
    const flight = await Flight.findByPk(flightId);
    if (!flight || flight.availableSeats < seatsBooked) {
      return res.status(400).json({ message: "Not enough available seats" });
    }

    const totalPrice = flight.price * seatsBooked;

    const booking = await Booking.create({
      userId,
      flightId,
      seatsBooked,
      totalPrice,
    });

    // Update available seats in Flight model
    flight.availableSeats -= seatsBooked;
    await flight.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  const userId = req.user.id;

  try {
    const bookings = await Booking.findAll({ where: { userId } });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    const flight = await Flight.findByPk(booking.flightId);
    flight.availableSeats += booking.seatsBooked; // Restore available seats
    await flight.save();

    await Booking.destroy({ where: { id } });
    res.json({ message: "Booking cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
