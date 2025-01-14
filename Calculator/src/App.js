// App.js

import React, { useState } from 'react';
import './App.css';
import Result from './Components/Result';
import Header from './Components/Header'; // Import Header component
import Keyboard from './Components/Keyboard'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(1);

  const themeColors = {
    1: '#ffffff',
    2: '#000000',
    3: '#ffdd4a',
  };

  const backgroundColors = {
    1: '#2f2f2f',
    2: '#ffffff',
    3: '#800080',
  };

  const textColors = {
    1: '#ffffff',
    2: '#000000',
    3: '#ffdd4a',
  };

  const inputBgColors = {
    1: '#444444',
    2: '#f0f0f0',
    3: '#800080',
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="screen">
      <div className="container">
        {/* Pass the necessary props to the Header component */}
        <Header
          selectedTheme={selectedTheme}
          themeColors={themeColors}
          backgroundColors={backgroundColors}
          textColors={textColors}
          handleThemeChange={handleThemeChange}
        />
        
        {/* Pass props to Result component */}
        <Result
          selectedTheme={selectedTheme}
          inputBgColors={inputBgColors}
          textColors={textColors}
        />

        <Keyboard 
        selectedTheme={selectedTheme}
        themeColors={themeColors}
        backgroundColors={backgroundColors}
        textColors={textColors}
        handleThemeChange={handleThemeChange}
        />
      </div>
    </div>
  );
}

export default App;
