/* const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
serviceId:String,
studentName:String,
hostel:String,
date:String
});

module.exports = mongoose.model("Booking",bookingSchema);
 */


/* const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  serviceId: {
    type: String,
    required: true
  },
  serviceName: {
    type: String
  },
  studentName: {
    type: String,
    required: true
  },
  hostel: {
    type: String
  },
  bookingDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", bookingSchema); */


/* const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  serviceId: String,
  serviceName: String,
  studentName: String,
  hostel: String,
  roomLocation: String,
  quantity: Number,
  preferredDate: String,
  preferredTime: String,
  contactPreference: String,
  specialRequest: String,
  totalAmount: Number
});

module.exports = mongoose.model("Booking", bookingSchema); */


const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  serviceId: {
    type: String,
    required: true
  },

  serviceName: {
    type: String,
    required: true
  },

  studentName: {
    type: String,
    required: true
  },

  hostel: {
    type: String,
    required: true
  },

  roomLocation: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true,
    min: 1
  },

  preferredDate: {
  type: String,
  required: true
  },

  preferredTime: {
  type: String,
  required: true
  },

  contactPreference: String,
  specialRequest: String,

  totalAmount: {
    type: Number,
    min: 0
  },

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);