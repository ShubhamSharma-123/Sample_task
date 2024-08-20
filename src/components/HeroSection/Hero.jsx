
import React, { useState } from 'react';
import backgroundImage from '../../assets/images/Hero_section.png';
import logo from '../../assets/images/smart lights_logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Navbar */}
      <header className="lg:flex lg:justify-center" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <div className="flex justify-between items-center p-4 lg:w-4/5">
          <div className="text-xl font-bold">
            <img src={logo} alt="Smart Lights Logo" />
          </div>

          {/* Hamburger Menu Icon */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? (
                <i className="fas fa-times text-2xl"></i> // Close icon
              ) : (
                <i className="fas fa-bars text-2xl"></i> // Hamburger icon
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="/" className="text-white">Home</a>
            <a href="/" className="text-white">Products</a>
            <a href="/" className="text-white">Software Services</a>
            <div className="md:block">
              <button className="text-white md:w-[140px] md:p-2" style={{ backgroundImage: "linear-gradient(to bottom right, #3661FF, #0085FF)" }}>Login</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Centered Mobile Menu */}
      {menuOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <nav className="flex flex-col items-center space-y-6 text-lg">
            <a href="/" className="text-white">Home</a>
            <a href="/" className="text-white">Products</a>
            <a href="/" className="text-white">Software Services</a>
            <button className="text-white w-[140px] p-2 mt-4" style={{ backgroundImage: "linear-gradient(to bottom right, #3661FF, #0085FF)" }}>Login</button>
            <button onClick={closeMenu} className="mt-4 text-white underline">Close Menu</button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center text-center lg:mt-4">
        <div className="p-4 lg:w-1/2">
          <p style={{ fontFamily: 'Inter' }} className="tracking-wide font-light text-xl text-blue-100 md:font-extralight">Smart Lighting Solutions</p>
          <p className="text-blue-100 opacity-80 text-2xl md:text-3xl font-light mb-6 mt-3">Bringing A New Perspective To Street Lights And The Cities Of Tomorrow.</p>
          <button className="bg-blue-600 text-white py-1 px-6 rounded text-lg md:text-xl lg:px-8 lg:py-2">Login</button>
        </div>
      </main>
    </div>
  );
}

export default Hero;

