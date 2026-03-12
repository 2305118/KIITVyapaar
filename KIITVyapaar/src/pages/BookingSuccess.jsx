
import React from "react";
import { Link, useLocation } from "react-router-dom";

function BookingSuccess() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-lg">Please try booking again.</p>
          <Link to="/book" className="mt-6 inline-block bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700">
            Go Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-green-200">
        <div className="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
          Booking Confirmed!
        </h1>

        <p className="text-xl text-gray-700 mb-10">
          Thank you for booking with KIIT Vyapar! Your service has been successfully reserved.
        </p>

        <div className="bg-green-50 p-6 rounded-xl mb-10 text-left">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Booking Details</h2>
          <div className="space-y-3 text-gray-800">
            <p><strong>Service:</strong> {booking.service}</p>
            <p><strong>Total Amount:</strong> ₹{booking.total}</p>
            <p><strong>Date & Time:</strong> {booking.date} at {booking.time}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Contact:</strong> {booking.contactPref || "Not specified"}
              {booking.phoneNumber && ` (${booking.phoneNumber})`}
            </p>
            {booking.note && <p><strong>Note:</strong> {booking.note}</p>}
            <p className="text-sm text-gray-600 mt-4">
              Booked on: {booking.bookedAt}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/book"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
          >
            Book Another Service
          </Link>

          <Link
            to="/"
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccess;