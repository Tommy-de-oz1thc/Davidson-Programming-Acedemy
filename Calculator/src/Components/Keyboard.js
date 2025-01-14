import React from 'react';

function Keyboard({ selectedTheme, themeColors, backgroundColors, textColors, handleThemeChange }) {
  const handleButtonClick = (value) => {
    // Handle button clicks for calculations, DEL, RESET
    console.log(value);
  };

  return (
    <div 
      style={{ 
        color: textColors[selectedTheme], 
        backgroundColor: backgroundColors[selectedTheme], 
        padding: "20px", 
        borderRadius: "10px" 
      }}>
      
      <div className="button-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {/* First row */}
        {['7', '8', '9', '/'].map((value) => (
          <button 
            key={value}
            onClick={() => handleButtonClick(value)}
            style={{
              padding: "15px", 
              backgroundColor: textColors[selectedTheme], 
              color: backgroundColors[selectedTheme],
              border: "none", 
              borderRadius: "5px", 
              fontSize: "18px"
            }}
          >
            {value}
          </button>
        ))}
        
        {/* Second row */}
        {['4', '5', '6', '*'].map((value) => (
          <button 
            key={value}
            onClick={() => handleButtonClick(value)}
            style={{
              padding: "15px", 
              backgroundColor: textColors[selectedTheme], 
              color: backgroundColors[selectedTheme],
              border: "none", 
              borderRadius: "5px", 
              fontSize: "18px"
            }}
          >
            {value}
          </button>
        ))}
        
        {/* Third row */}
        {['1', '2', '3', '-'].map((value) => (
          <button 
            key={value}
            onClick={() => handleButtonClick(value)}
            style={{
              padding: "15px", 
              backgroundColor: textColors[selectedTheme], 
              color: backgroundColors[selectedTheme],
              border: "none", 
              borderRadius: "5px", 
              fontSize: "18px"
            }}
          >
            {value}
          </button>
        ))}
        
        {/* Fourth row */}
        {['0', '.', 'DEL', '+'].map((value) => (
          <button 
            key={value}
            onClick={() => handleButtonClick(value)}
            style={{
              padding: "15px", 
              backgroundColor: textColors[selectedTheme], 
              color: backgroundColors[selectedTheme],
              border: "none", 
              borderRadius: "5px", 
              fontSize: "18px"
            }}
          >
            {value}
          </button>
        ))}

        {/* Fifth row (equals and reset buttons) */}
        <div style={{ gridColumn: "span 4" }}>
          <button
            onClick={() => handleButtonClick("=")}
            style={{
              padding: "15px", 
              backgroundColor: "red", // Red color for '=' button
              color: '#fff',
              border: "none", 
              borderRadius: "5px", 
              fontSize: "18px",
              width: "100%"
            }}
          >
            =
          </button>
        </div>
        <div style={{ gridColumn: "span 4" }}>
          <button
            onClick={() => handleButtonClick("RESET")}
            style={{
              padding: "15px", 
              backgroundColor: "grey", // Grey color for RESET button
              color: '#fff',
              border: "none", 
              borderRadius: "5px", 
              fontSize: "18px",
              width: "100%"
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
