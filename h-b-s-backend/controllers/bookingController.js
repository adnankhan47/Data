const Booking = require("../models/Booking");

let bookings = []; // In-memory booking storage (replace with database logic)

exports.createBooking = (req, res) => {
  const { userId, roomId, checkInDate, checkOutDate, totalPrice } = req.body;
  const newBooking = new Booking(
    bookings.length + 1,
    userId,
    roomId,
    checkInDate,
    checkOutDate,
    totalPrice
  );
  bookings.push(newBooking);
  res
    .status(201)
    .json({ message: "Booking created successfully", booking: newBooking });
};

exports.getUserBookings = (req, res) => {
  const { userId } = req.params;
  const userBookings = bookings.filter((booking) => booking.userId == userId);
  res.status(200).json(userBookings);
};
