/* const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/book", async(req,res)=>{
const booking = new Booking(req.body);
await booking.save();
res.json({message:"Booking successful"});
});

router.get("/", async(req,res)=>{
const bookings = await Booking.find();
res.json(bookings);
});

module.exports = router; */


/* const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/book", async (req, res) => {
  try {

    const booking = new Booking(req.body);

    await booking.save();

    res.status(200).json({
      message: "Booking Successful"
    });

  } catch (error) {

    res.status(500).json({
      message: "Booking Failed"
    });

  }
});

module.exports = router; */

const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST /book — Create Booking
router.post("/book", async (req, res) => {

  try {

    const {
      serviceId,
      serviceName,
      studentName,
      hostel,
      roomLocation,
      preferredDate,
      preferredTime
    } = req.body;

    if (
      !serviceId ||
      !serviceName ||
      !studentName ||
      !hostel ||
      !roomLocation ||
      !preferredDate ||
      !preferredTime
    ) {
      return res.status(400).json({
        message: "All required fields must be filled"
      });
    }

    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({
      message: "Booking Successful",
      booking
    });

  } catch (error) {

    res.status(500).json({
      message: "Booking Failed",
      error
    });

  }

});

// GET / — Get All Bookings
// For Admin Dashboard or Service Provider Panel
router.get("/", async (req, res) => {

  try {

    const bookings = await Booking.find();
    res.status(200).json(bookings);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching bookings"
    });

  }

});

// GET /student/:name - Get bookings of a specific student
// For My bookings page in frontend
router.get("/student/:name", async (req, res) => {

  try {

    const studentName = req.params.name;

    const bookings = await Booking.find({ studentName });

    res.status(200).json(bookings);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching student bookings"
    });

  }

});

module.exports = router;