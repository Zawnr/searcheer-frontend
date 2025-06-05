import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router> 
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow container mx-auto px-6 py-8">

          <Routes>
            <Route path="/" element={<HomePage />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
