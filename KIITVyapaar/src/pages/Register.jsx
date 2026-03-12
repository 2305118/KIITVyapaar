import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    kiitId: "",
    hostel: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center pt-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2000&auto=format&fit=crop')"
      }}
    >
      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl shadow-2xl w-full max-w-lg">
        
        <h2 className="text-3xl font-bold text-center text-[#10214a] mb-6">
          Become a Service Provider 💄
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          />

          <input
            type="text"
            name="roll"
            placeholder="Roll Number"
            onChange={handleChange}
            required
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          />

          <input
            type="text"
            name="kiitId"
            placeholder="KIIT ID"
            onChange={handleChange}
            required
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          />

          <input
            type="text"
            name="hostel"
            placeholder="Hostel Name"
            onChange={handleChange}
            required
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          />

          {/* ✅ Phone Number Added Properly */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          />

          <select
            name="service"
            onChange={handleChange}
            required
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          >
            <option value="">Select Service Category</option>
            <option>Makeup & Mehendi</option>
            <option>Crochet & Crafts</option>
            <option>Tutoring</option>
            <option>Home Cooked Food</option>
            <option>Event Services</option>
          </select>

          <textarea
            name="description"
            placeholder="Describe your service..."
            rows="3"
            onChange={handleChange}
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#ff8c42] text-white font-bold py-3 rounded hover:bg-[#e6762f] transition duration-300"
          >
            Register Now
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;
