const express = require("express");
const router = express.Router();
const Flight = require("../models/flightModel");

router.get("/getallflights", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.send(flights);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addflight", async (req, res) => {
  try {
    const newflight = new Flight(req.body);
    await newflight.save();
    res.send("Flight added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editcar", async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.body._id });
    car.name = req.body.name;
    car.image = req.body.image;
    car.fuelType = req.body.fuelType;
    car.rentPerHour = req.body.rentPerHour;
    car.capacity = req.body.capacity;

    await car.save();

    res.send("Car details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteflight", async (req, res) => {
  try {
    await Flight.findOneAndDelete({ _id: req.body.carid });

    res.send("Flight deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
