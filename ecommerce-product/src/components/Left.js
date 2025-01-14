import React from 'react';
import './Left.css';

function Left() {
  return (
    <div className="hideMobile">
      <img style={{ width: '100%' }} src={`${process.env.PUBLIC_URL}/images/image-product-1.jpg`} alt="Description of the image" />
      <div style={{ paddingTop: "50px" }}>
        <img
          style={{ width: '20%', marginRight: '20px' }}
          src={`${process.env.PUBLIC_URL}/images/image-product-1-thumbnail.jpg`}
          alt="Description of the image"
        />
        <img
          style={{ width: '20%', marginRight: '20px' }}
          src={`${process.env.PUBLIC_URL}/images/image-product-2-thumbnail.jpg`}
          alt="Description of the image"
        />
        <img
          style={{ width: '20%', marginRight: '20px' }}
          src={`${process.env.PUBLIC_URL}/images/image-product-3-thumbnail.jpg`}
          alt="Description of the image"
        />
        <img
          style={{ width: '20%' }}
          src={`${process.env.PUBLIC_URL}/images/image-product-4-thumbnail.jpg`}
          alt="Description of the image"
        />
      </div>
    </div>
  );
}

export default Left;
