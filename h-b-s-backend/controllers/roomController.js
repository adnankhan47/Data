const Room = require("../models/Room");

let rooms = []; // In-memory room storage (replace with database logic)

exports.addRoom = (req, res) => {
  const { hotelId, roomType, available, price } = req.body;
  const newRoom = new Room(
    rooms.length + 1,
    hotelId,
    roomType,
    available,
    price
  );
  rooms.push(newRoom);
  res.status(201).json({ message: "Room added successfully", room: newRoom });
};

exports.getRoomsByHotel = (req, res) => {
  const { hotelId } = req.params;
  const hotelRooms = rooms.filter((room) => room.hotelId == hotelId);
  res.status(200).json(hotelRooms);
};
