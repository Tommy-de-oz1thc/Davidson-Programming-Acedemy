import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="App">
       {/* Hamburger ikon for mobil */}
       <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      <Header />
      
      <div style={{ display: 'flex', gap: '20px' }}>
        
        <div className="left hideMobile" >
        <Left  />
        </div>
        <div className="right">
          {/* Show on mobile */}
        <div className="showMobile">
          <img style={{ width: '100%' }} src={`${process.env.PUBLIC_URL}/images/image-product-1.jpg`} alt="Description of the image" />
        </div>
        <Right />
        </div>
    </div>
    </div>
  );
}

export default App;
