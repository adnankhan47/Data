// models/hotel.js
class Hotel {
  constructor(id, name, location, amenities, pricePerNight) {
    this.id = id; // Unique identifier for the hotel
    this.name = name; // Hotel name
    this.location = location; // Hotel location
    this.amenities = amenities; // List of amenities (e.g., Wi-Fi, Pool)
    this.pricePerNight = pricePerNight; // Price per night for booking
  }
}

module.exports = Hotel;
