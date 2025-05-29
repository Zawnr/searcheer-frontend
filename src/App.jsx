import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import bgBlur from './assets/bg-blur.png';
import abstract from './assets/abstract.png';
import abstract2 from './assets/abstract2.png';

function AppContent() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/register';

  return (
    <div
      className="min-h-screen flex flex-col"
      style={
        isAuthPage
          ? {
              backgroundImage: `url(${bgBlur})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {!isAuthPage && <Navbar />}

      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/team" element={<OurTeam />} />

              <Route
                path="/login"
                element={
                  <div className="flex w-full max-w-full min-h-[auto] rounded-3xl shadow-xl overflow-hidden bg-transparent mt-4 mb-4 mx-auto items-center px-4 sm:px-6 md:px-8">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full max-w-full sm:max-w-md rounded-3xl bg-[#4D5B73]/90 shadow-xl px-6 sm:px-12 py-6 sm:py-10">
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
                  <div className="flex w-full max-w-full min-h-[auto] rounded-3xl shadow-xl overflow-hidden bg-transparent mt-4 mb-4 mx-auto items-center px-4 sm:px-6 md:px-8">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full max-w-full sm:max-w-md rounded-3xl bg-[#4D5B73]/90 shadow-xl px-6 sm:px-12 py-6 sm:py-10">
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
          </motion.div>
        </AnimatePresence>
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
