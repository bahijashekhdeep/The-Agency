// import "./App.css";

// import Pricing from "./Components/pricing/pricing";
// import Slider from "./Components/Slider/slider";
// import News from "./Components/newss/SignUp";
// import Footer from "./Components/Footer/footer";
// import Request from "./Components/RequestForm/request"
// // import Login from "./Components/Login/login"
// // import CreatAcount from "./Components/CreatAcount/CreatAcount"

// // import ViewAdmen from "./Components/ViewAdmen/viewadmen.js";
// // import ChangePassword from "./Components/ChangePassword/changpassword";

// function App() {
//   return (
//     <div className="App">
//       <Slider />
//       <Pricing />
//       <News />

//       <Request />
//       <Footer />
//       {/* <Login /> */}
//       {/* <CreatAcount /> */}
//       {/* <ViewAdmen /> */}
//       {/* <ChangePassword /> */}
//     </div>
//   );
// }

// export default App;





import "./App.css";
// import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";

import { Outlet, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navigate to="/Agency/home" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

