import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import AnalyzingView from './components/Home/AnalyzingView';
import AnalysisResult from './components/Home/AnalysisResult';
import ScrollToTop from './components/Shared/ScrollToTop';
import bgBlur from './assets/images/Bg/bg-blur.png';
import abstract from './assets/images/Bg/abstract.png';
import abstract2 from './assets/images/Bg/abstract2.png';
import './App.css';

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
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            classNames="page"
            timeout={300}
            unmountOnExit
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/analyzing" element={<AnalyzingView />} />
              <Route path="/analysis-result" element={<AnalysisResult />} />

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
          </CSSTransition>
        </TransitionGroup>
      </div>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
