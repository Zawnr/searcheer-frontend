import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import bgBlur from "./assets/bg-blur.png";
import abstract from "./assets/abstract.png";
import abstract2 from "./assets/abstract2.png";

function AppContent() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bgBlur})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {!isAuthPage && <Navbar />}

      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />

          <Route
            path="/login"
            element={
              <div className="flex w-full max-w-5xl min-h-[680px] rounded-3xl shadow-xl overflow-hidden bg-transparent mt-4 mb-4 mx-auto items-center">
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-[480px] rounded-3xl bg-[#4D5B73]/90 shadow-xl px-12 py-10">
                    <Login />
                  </div>
                </div>
                <div className="hidden md:flex flex-1 items-center justify-center bg-transparent relative">
                  <img
                    src={abstract}
                    alt="abstract"
                    className="max-w-[340px] object-contain opacity-90"
                    draggable="false"
                  />
                </div>
              </div>
            }
          />

          <Route
            path="/register"
            element={
              <div className="flex w-full max-w-5xl min-h-[680px] rounded-3xl shadow-xl overflow-hidden bg-transparent mt-4 mb-4 mx-auto items-center">
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-[480px] rounded-3xl bg-[#4D5B73]/90 shadow-xl px-12 py-10">
                    <Register />
                  </div>
                </div>
                <div className="hidden md:flex flex-1 items-center justify-center bg-transparent relative">
                  <img
                    src={abstract2}
                    alt="abstract2"
                    className="max-w-[340px] object-contain opacity-90"
                    draggable="false"
                  />
                </div>
              </div>
            }
          />
        </Routes>
      </div>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
