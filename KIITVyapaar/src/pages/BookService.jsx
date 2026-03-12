
// // import React, { useState, useEffect } from "react";

// // const services = [
// //   { id: 1, name: "Bridal Mehendi (Full Hands + Legs)", price: 1200, category: "Beauty" },
// //   { id: 2, name: "Party Makeup + Hair Styling", price: 999, category: "Beauty" },
// //   { id: 3, name: "Daily Home Cooked Veg Meal (Thali)", price: 120, category: "Food" },
// //   { id: 4, name: "Non-Veg Tiffin Service (Lunch/Dinner)", price: 180, category: "Food" },
// //   { id: 5, name: "Maths Tuition (Class 10/12)", price: 350, category: "Education" },
// //   { id: 6, name: "English Spoken Classes (1 hour)", price: 250, category: "Education" },
// //   { id: 7, name: "Custom Handmade Keychains", price: 80, category: "Handmade" },
// //   { id: 8, name: "Personalized Rakhi with Name", price: 150, category: "Handmade" },
// //   { id: 9, name: "Gift Hampers (Birthday/Anniversary)", price: 499, category: "Gifts" },
// //   { id: 10, name: "Room Decoration (Balloon + Lights)", price: 800, category: "Events" },
// //   { id: 11, name: "Nail Art + Gel Polish", price: 450, category: "Beauty" },
// //   { id: 12, name: "Coding Doubt Solving Session", price: 400, category: "Education" },
// //   { id: 13, name: "Laundry & Iron Service (Per Month)", price: 600, category: "Daily Help" },
// //   { id: 14, name: "Fitness/Yoga Session (1 hour)", price: 200, category: "Health" },
// //   { id: 15, name: "Custom Photo Frames/Collage", price: 300, category: "Handmade" },
// // ];

// // function BookService() {
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [quantity, setQuantity] = useState(1);
// //   const [date, setDate] = useState("");
// //   const [time, setTime] = useState("");
// //   const [location, setLocation] = useState("");
// //   const [contactPref, setContactPref] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");  // ← New state for phone
// //   const [note, setNote] = useState("");
// //   const [bookings, setBookings] = useState([]);

// //   // Load bookings from localStorage
// //   useEffect(() => {
// //     const saved = JSON.parse(localStorage.getItem("bookings")) || [];
// //     setBookings(saved);
// //   }, []);

// //   // Save bookings to localStorage
// //   useEffect(() => {
// //     localStorage.setItem("bookings", JSON.stringify(bookings));
// //   }, [bookings]);

// //   const handleConfirm = () => {
// //     if (!date || !time || !location) {
// //       alert("Date, Time aur Room/Location daalna zaroori hai!");
// //       return;
// //     }

// //     if ((contactPref === "whatsapp" || contactPref === "call") && !phoneNumber) {
// //       alert("WhatsApp ya Call select kiya hai to phone number daalna zaroori hai!");
// //       return;
// //     }

// //     const newBooking = {
// //       id: Date.now(),
// //       service: selectedService.name,
// //       price: selectedService.price,
// //       quantity,
// //       total: selectedService.price * quantity,
// //       date,
// //       time,
// //       location,
// //       contactPref,
// //       phoneNumber: contactPref === "whatsapp" || contactPref === "call" ? phoneNumber : null,
// //       note,
// //       bookedAt: new Date().toLocaleString(),
// //     };

// //     setBookings([...bookings, newBooking]);

// //     alert(
// //       `Booking Confirmed! 🎉\n\n` +
// //       `Service: ${selectedService.name}\n` +
// //       `Total: ₹${newBooking.total}\n` +
// //       `Date & Time: ${date} at ${time}\n` +
// //       `Location: ${location}\n` +
// //       `Contact: ${contactPref || "Not specified"}${phoneNumber ? ` (${phoneNumber})` : ""}\n` +
// //       `Note: ${note || "None"}`
// //     );

// //     // Reset
// //     setSelectedService(null);
// //     setQuantity(1);
// //     setDate("");
// //     setTime("");
// //     setLocation("");
// //     setContactPref("");
// //     setPhoneNumber("");
// //     setNote("");
// //   };

// //   return (
// //     <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-8">
// //       <h2 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-12 tracking-tight">
// //         Available Services in Hostel
// //       </h2>

// //       {/* Services Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
// //         {services.map((service) => (
// //           <div
// //             key={service.id}
// //             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-gray-200"
// //           >
// //             <div className="p-6">
// //               <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
// //               <p className="text-2xl font-extrabold text-orange-600">₹{service.price}</p>
// //               <span className="inline-block mt-3 px-4 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
// //                 {service.category}
// //               </span>
// //             </div>
// //             <div className="px-6 pb-6">
// //               <button
// //                 className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
// //                 onClick={() => setSelectedService(service)}
// //               >
// //                 Book Now
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Overlay */}
// //       {selectedService && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"
// //           onClick={() => setSelectedService(null)}
// //         />
// //       )}

// //       {/* Right Side Booking Drawer */}
// //       <div
// //         className={`fixed top-0 right-0 h-full w-full md:w-105 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
// //           selectedService ? "translate-x-0" : "translate-x-full"
// //         } overflow-y-auto`}
// //       >
// //         {selectedService && (
// //           <div className="p-6 md:p-10 h-full flex flex-col">
// //             {/* Header */}
// //             <div className="flex justify-between items-center mb-8">
// //               <h2 className="text-3xl font-bold text-gray-900">{selectedService.name}</h2>
// //               <button
// //                 className="text-4xl text-gray-600 hover:text-red-600 transition-colors"
// //                 onClick={() => setSelectedService(null)}
// //               >
// //                 ×
// //               </button>
// //             </div>

// //             <p className="text-3xl font-extrabold text-orange-600 mb-8">₹{selectedService.price}</p>

// //             {/* Form */}
// //             <div className="space-y-6 flex-1">
// //               <div>
// //                 <label className="block text-gray-700 font-semibold mb-2">Quantity / Sessions</label>
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   value={quantity}
// //                   onChange={(e) => setQuantity(Number(e.target.value))}
// //                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
// //                 <input
// //                   type="date"
// //                   value={date}
// //                   onChange={(e) => setDate(e.target.value)}
// //                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
// //                 <input
// //                   type="time"
// //                   value={time}
// //                   onChange={(e) => setTime(e.target.value)}
// //                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-gray-700 font-semibold mb-2">Room / Hostel Location</label>
// //                 <input
// //                   type="text"
// //                   value={location}
// //                   onChange={(e) => setLocation(e.target.value)}
// //                   placeholder="e.g. Block A, Room 305"
// //                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-gray-700 font-semibold mb-2">Contact Preference</label>
// //                 <select
// //                   value={contactPref}
// //                   onChange={(e) => setContactPref(e.target.value)}
// //                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
// //                 >
// //                   <option value="">Select</option>
// //                   <option value="whatsapp">WhatsApp</option>
// //                   <option value="call">Call</option>
// //                   <option value="in-person">In-person</option>
// //                 </select>
// //               </div>

// //               {/* Phone Number – sirf WhatsApp ya Call pe dikhega */}
// //               {(contactPref === "whatsapp" || contactPref === "call") && (
// //                 <div>
// //                   <label className="block text-gray-700 font-semibold mb-2">
// //                     {contactPref === "whatsapp" ? "WhatsApp Number" : "Phone Number"}
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     value={phoneNumber}
// //                     onChange={(e) => setPhoneNumber(e.target.value)}
// //                     placeholder="e.g. 9876543210"
// //                     className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
// //                     required
// //                   />
// //                 </div>
// //               )}

// //               <div>
// //                 <label className="block text-gray-700 font-semibold mb-2">Special Request / Note (optional)</label>
// //                 <textarea
// //                   value={note}
// //                   onChange={(e) => setNote(e.target.value)}
// //                   placeholder="Any extra details, urgency, allergies, etc..."
// //                   className="w-full p-4 border border-gray-300 rounded-xl h-32 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
// //                 />
// //               </div>
// //             </div>

// //             {/* Total & Confirm */}
// //             <div className="mt-8 pt-6 border-t border-gray-200">
// //               <p className="text-2xl font-bold text-gray-900 mb-6">
// //                 Total Amount: <span className="text-orange-600">₹{selectedService.price * quantity}</span>
// //               </p>

// //               <button
// //                 onClick={handleConfirm}
// //                 className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02]"
// //               >
// //                 Confirm Booking
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Booking History */}
// //       {bookings.length > 0 && (
// //         <div className="mt-20 max-w-6xl mx-auto px-4">
// //           <h3 className="text-4xl font-bold text-center text-orange-600 mb-10">Your Bookings</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {bookings.map((booking) => (
// //               <div
// //                 key={booking.id}
// //                 className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl transition-shadow duration-300"
// //               >
// //                 <h4 className="text-xl font-bold text-gray-800 mb-4">{booking.service}</h4>
// //                 <div className="space-y-3 text-gray-700">
// //                   <p><strong>Total:</strong> ₹{booking.total}</p>
// //                   <p><strong>Quantity:</strong> {booking.quantity}</p>
// //                   <p><strong>Date & Time:</strong> {booking.date} at {booking.time}</p>
// //                   <p><strong>Location:</strong> {booking.location}</p>
// //                   <p><strong>Contact:</strong> {booking.contactPref || "Not specified"}
// //                     {booking.phoneNumber && ` (${booking.phoneNumber})`}
// //                   </p>
// //                   {booking.note && <p><strong>Note:</strong> {booking.note}</p>}
// //                   <p className="text-sm text-gray-500 mt-4 italic">
// //                     Booked on: {booking.bookedAt}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default BookService;









// import React, { useState, useEffect } from "react";

// const services = [
//   { id: 1, name: "Bridal Mehendi (Full Hands + Legs)", price: 1200, category: "Beauty" },
//   { id: 2, name: "Party Makeup + Hair Styling", price: 999, category: "Beauty" },
//   { id: 3, name: "Daily Home Cooked Veg Meal (Thali)", price: 120, category: "Food" },
//   { id: 4, name: "Non-Veg Tiffin Service (Lunch/Dinner)", price: 180, category: "Food" },
//   { id: 5, name: "Maths Tuition (Class 10/12)", price: 350, category: "Education" },
//   { id: 6, name: "English Spoken Classes (1 hour)", price: 250, category: "Education" },
//   { id: 7, name: "Custom Handmade Keychains", price: 80, category: "Handmade" },
//   { id: 8, name: "Personalized Rakhi with Name", price: 150, category: "Handmade" },
//   { id: 9, name: "Gift Hampers (Birthday/Anniversary)", price: 499, category: "Gifts" },
//   { id: 10, name: "Room Decoration (Balloon + Lights)", price: 800, category: "Events" },
//   { id: 11, name: "Nail Art + Gel Polish", price: 450, category: "Beauty" },
//   { id: 12, name: "Coding Doubt Solving Session", price: 400, category: "Education" },
//   { id: 13, name: "Laundry & Iron Service (Per Month)", price: 600, category: "Daily Help" },
//   { id: 14, name: "Fitness/Yoga Session (1 hour)", price: 200, category: "Health" },
//   { id: 15, name: "Custom Photo Frames/Collage", price: 300, category: "Handmade" },
// ];

// function BookService() {
//   const [selectedService, setSelectedService] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [location, setLocation] = useState("");
//   const [contactPref, setContactPref] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");  // ← New state for phone
//   const [note, setNote] = useState("");
//   const [bookings, setBookings] = useState([]);

//   // Load bookings from localStorage
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("bookings")) || [];
//     setBookings(saved);
//   }, []);

//   // Save bookings to localStorage
//   useEffect(() => {
//     localStorage.setItem("bookings", JSON.stringify(bookings));
//   }, [bookings]);

//   const handleConfirm = () => {
//     if (!date || !time || !location) {
//       alert("Date, Time aur Room/Location daalna zaroori hai!");
//       return;
//     }

//     if ((contactPref === "whatsapp" || contactPref === "call") && !phoneNumber) {
//       alert("WhatsApp ya Call select kiya hai to phone number daalna zaroori hai!");
//       return;
//     }

//     const newBooking = {
//       id: Date.now(),
//       service: selectedService.name,
//       price: selectedService.price,
//       quantity,
//       total: selectedService.price * quantity,
//       date,
//       time,
//       location,
//       contactPref,
//       phoneNumber: contactPref === "whatsapp" || contactPref === "call" ? phoneNumber : null,
//       note,
//       bookedAt: new Date().toLocaleString(),
//     };

//     const updatedBookings = [...bookings, newBooking];
//     setBookings(updatedBookings);

//     localStorage.setItem("bookings", JSON.stringify(updatedBookings));

//     alert(
//       `Booking Confirmed! 🎉\n\n` +
//       `Service: ${selectedService.name}\n` +
//       `Total: ₹${newBooking.total}\n` +
//       `Date & Time: ${date} at ${time}\n` +
//       `Location: ${location}\n` +
//       `Contact: ${contactPref || "Not specified"}${phoneNumber ? ` (${phoneNumber})` : ""}\n` +
//       `Note: ${note || "None"}`
//     );

//     // Reset
//     setSelectedService(null);
//     setQuantity(1);
//     setDate("");
//     setTime("");
//     setLocation("");
//     setContactPref("");
//     setPhoneNumber("");
//     setNote("");
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-8">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-12 tracking-tight">
//         Available Services in Hostel
//       </h2>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-gray-200"
//           >
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
//               <p className="text-2xl font-extrabold text-orange-600">₹{service.price}</p>
//               <span className="inline-block mt-3 px-4 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
//                 {service.category}
//               </span>
//             </div>
//             <div className="px-6 pb-6">
//               <button
//                 className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
//                 onClick={() => setSelectedService(service)}
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Overlay */}
//       {selectedService && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"
//           onClick={() => setSelectedService(null)}
//         />
//       )}

//       {/* Right Side Booking Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full md:w-105 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
//           selectedService ? "translate-x-0" : "translate-x-full"
//         } overflow-y-auto`}
//       >
//         {selectedService && (
//           <div className="p-6 md:p-10 h-full flex flex-col">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-900">{selectedService.name}</h2>
//               <button
//                 className="text-4xl text-gray-600 hover:text-red-600 transition-colors"
//                 onClick={() => setSelectedService(null)}
//               >
//                 ×
//               </button>
//             </div>

//             <p className="text-3xl font-extrabold text-orange-600 mb-8">₹{selectedService.price}</p>

//             {/* Form */}
//             <div className="space-y-6 flex-1">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Quantity / Sessions</label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
//                 <input
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
//                 <input
//                   type="time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Room / Hostel Location</label>
//                 <input
//                   type="text"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   placeholder="e.g. Block A, Room 305"
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Contact Preference</label>
//                 <select
//                   value={contactPref}
//                   onChange={(e) => setContactPref(e.target.value)}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
//                 >
//                   <option value="">Select</option>
//                   <option value="whatsapp">WhatsApp</option>
//                   <option value="call">Call</option>
//                   <option value="in-person">In-person</option>
//                 </select>
//               </div>

//               {/* Phone Number – sirf WhatsApp ya Call pe dikhega */}
//               {(contactPref === "whatsapp" || contactPref === "call") && (
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     {contactPref === "whatsapp" ? "WhatsApp Number" : "Phone Number"}
//                   </label>
//                   <input
//                     type="tel"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     placeholder="e.g. 9876543210"
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
//                     required
//                   />
//                 </div>
//               )}

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Special Request / Note (optional)</label>
//                 <textarea
//                   value={note}
//                   onChange={(e) => setNote(e.target.value)}
//                   placeholder="Any extra details, urgency, allergies, etc..."
//                   className="w-full p-4 border border-gray-300 rounded-xl h-32 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
//                 />
//               </div>
//             </div>

//             {/* Total & Confirm */}
//             <div className="mt-8 pt-6 border-t border-gray-200">
//               <p className="text-2xl font-bold text-gray-900 mb-6">
//                 Total Amount: <span className="text-orange-600">₹{selectedService.price * quantity}</span>
//               </p>

//               <button
//                 onClick={handleConfirm}
//                 className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02]"
//               >
//                 Confirm Booking
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Booking History */}
//       {bookings.length > 0 && (
//         <div className="mt-20 max-w-6xl mx-auto px-4">
//           <h3 className="text-4xl font-bold text-center text-orange-600 mb-10">Your Bookings</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <h4 className="text-xl font-bold text-gray-800 mb-4">{booking.service}</h4>
//                 <div className="space-y-3 text-gray-700">
//                   <p><strong>Total:</strong> ₹{booking.total}</p>
//                   <p><strong>Quantity:</strong> {booking.quantity}</p>
//                   <p><strong>Date & Time:</strong> {booking.date} at {booking.time}</p>
//                   <p><strong>Location:</strong> {booking.location}</p>
//                   <p><strong>Contact:</strong> {booking.contactPref || "Not specified"}
//                     {booking.phoneNumber && ` (${booking.phoneNumber})`}
//                   </p>
//                   {booking.note && <p><strong>Note:</strong> {booking.note}</p>}
//                   <p className="text-sm text-gray-500 mt-4 italic">
//                     Booked on: {booking.bookedAt}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BookService;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, name: "Bridal Mehendi (Full Hands + Legs)", price: 1200, category: "Beauty" },
  { id: 2, name: "Party Makeup + Hair Styling", price: 999, category: "Beauty" },
  { id: 3, name: "Daily Home Cooked Veg Meal (Thali)", price: 120, category: "Food" },
  { id: 4, name: "Tiffin Service (Lunch/Dinner)", price: 180, category: "Food" },
  { id: 5, name: "Tutor", price: 350, category: "Education" },
  { id: 6, name: "English Spoken Classes (1 hour)", price: 250, category: "Education" },
  { id: 7, name: "Custom Handmade Keychains", price: 80, category: "Handmade" },
  { id: 8, name: "Personalized Rakhi with Name", price: 150, category: "Handmade" },
  { id: 9, name: "Gift Hampers (Birthday/Anniversary)", price: 499, category: "Gifts" },
  { id: 10, name: "Room Decoration (Balloon + Lights)", price: 800, category: "Events" },
  { id: 11, name: "Nail Art + Gel Polish", price: 450, category: "Beauty" },
  { id: 12, name: "Coding Doubt Solving Session", price: 400, category: "Education" },
  { id: 13, name: "Laundry & Iron Service (Per Month)", price: 600, category: "Daily Help" },
  { id: 14, name: "Fitness/Yoga Session (1 hour)", price: 200, category: "Health" },
  { id: 15, name: "Custom Photo Frames/Collage", price: 300, category: "Handmade" },
];

function BookService() {
  const [selectedService, setSelectedService] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [contactPref, setContactPref] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");
  const [bookings, setBookings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleConfirm = () => {
    if (!date || !time || !location) {
      alert("Date, Time aur Room/Location daalna zaroori hai!");
      return;
    }

    if ((contactPref === "whatsapp" || contactPref === "call") && !phoneNumber) {
      alert("WhatsApp ya Call select kiya hai to phone number daalna zaroori hai!");
      return;
    }

    const newBooking = {
      id: Date.now(),
      service: selectedService.name,
      price: selectedService.price,
      quantity,
      total: selectedService.price * quantity,
      date,
      time,
      location,
      contactPref,
      phoneNumber: contactPref === "whatsapp" || contactPref === "call" ? phoneNumber : null,
      note,
      bookedAt: new Date().toLocaleString(),
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
 
    navigate("/booking-success", { state: { booking: newBooking } });

    // Reset form
    setSelectedService(null);
    setQuantity(1);
    setDate("");
    setTime("");
    setLocation("");
    setContactPref("");
    setPhoneNumber("");
    setNote("");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-12 tracking-tight">
        Available Services in Hostel
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-gray-200"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-2xl font-extrabold text-orange-600">₹{service.price}</p>
              <span className="inline-block mt-3 px-4 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                {service.category}
              </span>
            </div>
            <div className="px-6 pb-6">
              <button
                className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => setSelectedService(service)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-105 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          selectedService ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        {selectedService && (
          <div className="p-6 md:p-10 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">{selectedService.name}</h2>
              <button
                className="text-4xl text-gray-600 hover:text-red-600 transition-colors"
                onClick={() => setSelectedService(null)}
              >
                ×
              </button>
            </div>

            <p className="text-3xl font-extrabold text-orange-600 mb-8">₹{selectedService.price}</p>

            <div className="space-y-6 flex-1">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Quantity / Sessions</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Room / Hostel Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Block A, Room 305"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Contact Preference</label>
                <select
                  value={contactPref}
                  onChange={(e) => setContactPref(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                >
                  <option value="">Select</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="call">Call</option>
                  <option value="in-person">In-person</option>
                </select>
              </div>

              {(contactPref === "whatsapp" || contactPref === "call") && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {contactPref === "whatsapp" ? "WhatsApp Number" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Special Request / Note (optional)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Any extra details, urgency, allergies, etc..."
                  className="w-full p-4 border border-gray-300 rounded-xl h-32 focus:ring-2 focus:ring-orange-500 outline-none transition"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-2xl font-bold text-gray-900 mb-6">
                Total Amount: <span className="text-orange-600">₹{selectedService.price * quantity}</span>
              </p>

              <button
                onClick={handleConfirm}
                className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02]"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>

      {bookings.length > 0 && (
        <div className="mt-20 max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-orange-600 mb-10">Your Bookings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4">{booking.service}</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Total:</strong> ₹{booking.total}</p>
                  <p><strong>Quantity:</strong> {booking.quantity}</p>
                  <p><strong>Date & Time:</strong> {booking.date} at {booking.time}</p>
                  <p><strong>Location:</strong> {booking.location}</p>
                  <p><strong>Contact:</strong> {booking.contactPref || "Not specified"}
                    {booking.phoneNumber && ` (${booking.phoneNumber})`}
                  </p>
                  {booking.note && <p><strong>Note:</strong> {booking.note}</p>}
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Booked on: {booking.bookedAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookService;






