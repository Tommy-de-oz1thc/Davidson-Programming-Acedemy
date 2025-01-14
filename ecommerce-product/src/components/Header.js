import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left side (brand and desktop navigation) */}
        <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
          {/* Hamburger icon for mobile */}
          <div 
            className="menu-icon" 
            onClick={toggleMenu} 
            style={{
              cursor: "pointer", 
              fontSize: "30px", 
              display: "none",  // Default to hiding, will show in mobile view
            }}
          >
            &#9776; {/* Hamburger icon */}
          </div>

          {/* Sneakers Title */}
          <h3 style={{ marginRight: "50px" }}>Sneakers</h3>

          {/* Desktop Menu */}
          <ul className="desktop-menu">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Shopping cart / Avatar */}
        <p>
          🛒 <img style={{ width: "20px" }} src={`${process.env.PUBLIC_URL}/images/image-avatar.png`} alt="Avatar" />
        </p>
      </div>

      {/* Mobile Menu: Rendered when menuOpen is true */}
      {menuOpen && (
        <ul className="mobile-menu" style={{
          position: "absolute", 
          top: "50px", 
          right: 0, 
          background: "#fff", 
          width: "100%", 
          padding: "20px", 
          listStyleType: "none", 
          margin: 0,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
}

export default Header;
