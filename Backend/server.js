const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/kiitvyapaar")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => {
console.log("Server running on port 5000");
});