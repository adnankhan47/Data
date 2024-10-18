// models/room.js
class Room {
  constructor(id, hotelId, roomType, available, price) {
    this.id = id; // Unique identifier for the room
    this.hotelId = hotelId; // Identifier for the hotel the room belongs to
    this.roomType = roomType; // Type of the room (e.g., Single, Double, Suite)
    this.available = available; // Boolean to check if the room is available
    this.price = price; // Price per night for the room
  }
}

module.exports = Room;
