import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#10214a] to-[#1b2f6b] text-white pt-24">

      <div className="bg-white text-center text-[#10214a] p-12 rounded-2xl shadow-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold mb-4 text-green-600">
          🎉 Successfully Registered!
        </h1>

        <p className="text-lg mb-6">
          Your details have been submitted successfully.
          <br />
          Welcome to <span className="font-bold">KIITVyapar</span> 💄✨
        </p>

        <div className="flex flex-col gap-4">

          <Link
            to="/"
            className="bg-[#ff8c42] text-white font-bold py-3 rounded hover:bg-[#e6762f] transition"
          >
            Go to Home
          </Link>

          <Link
            to="/register"
            className="border border-[#ff8c42] text-[#ff8c42] font-bold py-3 rounded hover:bg-[#ff8c42] hover:text-white transition"
          >
            Register Another Service
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Success;
