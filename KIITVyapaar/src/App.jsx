// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Success from "./pages/Success";
// import Navbar from "./Components/Navbar/Navbar";
// import BookService from "./pages/BookService";

// <Route path="/book" element={<BookService />} />
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/success" element={<Success />} />
//       </Routes>
//     </>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Success from "./pages/Success";
// import BookService from "./pages/BookService";  
// import BookingSuccess from "./pages/BookingSuccess";

// import Navbar from "./Components/Navbar/Navbar";

// function App() {
//   return (
//     <Router>   {/* ← yeh sabse zaroori hai – poore app ko Router me wrap karo */}
//       <div className="min-h-screen bg-gray-50">   {/* optional – styling ke liye */}
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/success" element={<Success />} />
          
//           {/* Yeh line ab Routes ke ANDAR hai */}
//           <Route path="/book" element={<BookService />} />
          
//           {/* Agar chahiye to yeh bhi add kar sakti ho */}
//           {/* <Route path="/book-service" element={<BookService />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/register" element={<Register />} />
//   <Route path="/success" element={<Success />} />
//   <Route path="/book" element={<BookService />} />
//   <Route path="/booking-success" element={<BookingSuccess />} />   
// </Routes>

// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Success from "./pages/Success";
// import BookService from "./pages/BookService";  
// import BookingSuccess from "./pages/BookingSuccess";

// import Navbar from "./Components/Navbar/Navbar";

// function App() {
//   return (
//     <Router>    
//       <div className="min-h-screen bg-gray-50">    
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/success" element={<Success />} />
           
//           <Route path="/book" element={<BookService />} />
           
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Success from "./pages/Success";
import BookService from "./pages/BookService";
import BookingSuccess from "./pages/BookingSuccess";    

import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/book" element={<BookService />} />
 
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





