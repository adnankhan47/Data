const Flight = require("../models/flight");

exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.findAll();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchFlights = async (req, res) => {
  const { departure, destination, date } = req.query;

  try {
    const flights = await Flight.findAll({
      where: {
        departure,
        destination,
        departureTime: {
          [Op.gte]: new Date(date), // Change date to Date object
        },
      },
    });
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateFlight = async (req, res) => {
  const { id } = req.params;

  try {
    await Flight.update(req.body, { where: { id } });
    res.json({ message: "Flight updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFlight = async (req, res) => {
  const { id } = req.params;

  try {
    await Flight.destroy({ where: { id } });
    res.json({ message: "Flight deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
