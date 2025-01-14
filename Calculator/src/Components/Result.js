import React from 'react';

function Result({ selectedTheme, inputBgColors, textColors }) {
  return (
    <div>
      
      {/* Text Box */}
      <div className="text-box-container">
        <input 
          type="text"
          value={`399,981`}  // This can be a dynamic value as needed
          readOnly
          style={{
            backgroundColor: inputBgColors[selectedTheme],
            color: textColors[selectedTheme],
            textAlign: "right"
          }}
        />
      </div>
    </div>
  );
}

export default Result;
