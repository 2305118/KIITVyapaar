// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="p-6 flex flex-col md:flex-row md:justify-between items-center bg-slate-900 w-full z-50">
      
//       {/* Logo */}
//       <div className="italic text-[26px] font-bold text-white font-serif">
//         KIIT
//         <span className="text-[#ff8c42]">Vyapar</span>
//       </div>

//       {/* Links */}
//       <div className="flex flex-col md:flex-row gap-5 items-center mt-4 md:mt-0">
        
//         <Link
//           to="/"
//           className="text-white font-bold text-[18px] hover:text-[#ff8c42]"
//         >
//           Home
//         </Link>

//         <Link
//           to="/about"
//           className="text-white font-bold text-[18px] hover:text-[#ff8c42]"
//         >
//           About
//         </Link>

//         <Link
//           to="/register"
//           className="border border-[#ff8c42] px-6 py-2 text-white font-bold bg-[#ff8c42] rounded hover:bg-[#e6762f]"
//         >
//           Book Service
//         </Link>

//         <Link
//           to="/register"
//           className="border border-[#ff8c42] px-6 py-2 text-white font-bold bg-[#ff8c42] rounded hover:bg-[#e6762f]"
//         >
//           Register
//         </Link>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-6 flex flex-col md:flex-row md:justify-between items-center bg-slate-900 w-full z-50">
      
      {/* Logo */}
      <div className="italic text-[26px] font-bold text-white font-serif">
        KIIT
        <span className="text-[#ff8c42]">Vyapar</span>
      </div>

      {/* Links */}
      <div className="flex flex-col md:flex-row gap-5 items-center mt-4 md:mt-0">
        
        <Link
          to="/"
          className="text-white font-bold text-[18px] hover:text-[#ff8c42]"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-white font-bold text-[18px] hover:text-[#ff8c42]"
        >
          About
        </Link>

        {/* Yeh wala fix kar diya — ab Book Service /book pe jayega */}
        <Link
          to="/book"   // ← yahan change karo /register se /book pe
          className="border border-[#ff8c42] px-6 py-2 text-white font-bold bg-[#ff8c42] rounded hover:bg-[#e6762f]"
        >
          Book Service
        </Link>

        <Link
          to="/register"
          className="border border-[#ff8c42] px-6 py-2 text-white font-bold bg-[#ff8c42] rounded hover:bg-[#e6762f]"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;