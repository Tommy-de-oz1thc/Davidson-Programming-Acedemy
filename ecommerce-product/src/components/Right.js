import React, { useState } from "react";

function Right() {
  const originalPrice = 250.0; // Prisen for 1 stk.
  const discount = 0.5; // 50% rabat (0.5 = 50%)
  const discountedPrice = originalPrice * (1 - discount);

  const [quantity, setQuantity] = useState(0); // Holder styr på antal
  const totalPrice = discountedPrice * quantity; // Totalpris

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h4 style={{color: "gray"}}>SNEAKER COMPANY</h4>
      <h2>Fall Limited Edition Sneakers</h2>
      <p style={{paddingBottom: "20px"}}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      
      {/* Prisafsnit */}
      <div style={{ marginBottom: "16px" }}>
        <h1 style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          ${discountedPrice.toFixed(2)}
          <span
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            50%
          </span>
        </h1>
        <p style={{ paddingBottom: "20px", textAlign: "left", textDecoration: "line-through", color: "gray" }}>
          ${originalPrice.toFixed(2)}
        </p>
      </div>

      {/* Antalsvælger */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            border: "1px solid gray",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <button
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
            style={{
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            style={{
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        {/* Knappen "Add to Cart" */}
        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "12px 16px",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          🛒 Add To Cart
        </button>
      </div>

      {/* Opdateret pris */}
      <div style={{ marginTop: "46px" }}>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Right;
