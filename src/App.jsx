import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import bgBlur from "./assets/bg-blur.png";
import abstract from "./assets/abstract.png";
import abstract2 from "./assets/abstract2.png";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgBlur})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
                    alt="abstract"
                    className="max-w-[340px] object-contain opacity-90"
                    draggable="false"
                  />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
