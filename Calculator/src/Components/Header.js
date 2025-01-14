// Header.js

import React from 'react';
import './Header.css';  // Make sure to add a separate CSS for the header styles

const Header = ({ selectedTheme, themeColors, backgroundColors, textColors, handleThemeChange }) => {
  return (
    <div className="header" style={{ backgroundColor: backgroundColors[selectedTheme] }}>
      <div className="logo" style={{ color: themeColors[selectedTheme] }}>
        calc
      </div>
      <div className="theme-selector" style={{ color: textColors[selectedTheme] }}>
        <span style={{ color: themeColors[selectedTheme] }}>THEME</span>
        <div className="theme-options">
          <span onClick={() => handleThemeChange(1)}>1</span>
          <span onClick={() => handleThemeChange(2)}>2</span>
          <span onClick={() => handleThemeChange(3)}>3</span>

          <div
            className="theme-toggle"
            style={{
              left: `${(selectedTheme - 1) * 40}px`,
            }}
          >
            <div className="toggle-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
