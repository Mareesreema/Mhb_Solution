import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Admin from './Admin';
export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Services />
              <Portfolio />
              <Team />
              <Blogs />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </>
    </Router>
  );
}
