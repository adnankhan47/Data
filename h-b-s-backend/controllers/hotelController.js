const Hotel = require("../models/Hotel");

let hotels = []; // In-memory hotel storage (replace with database logic)

exports.addHotel = (req, res) => {
  const { name, location, amenities, pricePerNight } = req.body;
  const newHotel = new Hotel(
    hotels.length + 1,
    name,
    location,
    amenities,
    pricePerNight
  );
  hotels.push(newHotel);
  res
    .status(201)
    .json({ message: "Hotel added successfully", hotel: newHotel });
};

exports.getAllHotels = (req, res) => {
  res.status(200).json(hotels);
};
