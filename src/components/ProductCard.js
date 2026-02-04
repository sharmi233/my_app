import React from "react";

function ProductCard({ product, addToCart, buyNow }) {
  return (
    <div
      style={{
        width: "250px", // Card size konjam adjust pannirukan
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        background: "rgba(255, 255, 255, 0.9)", // Backgound transparent white (Glass effect)
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h4 style={{ margin: "15px 0 5px 0" }}>{product.name}</h4>
      <p style={{ margin: "0 0 15px 0", fontWeight: "bold", color: "#222" }}>₹ {product.price}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={() => addToCart(product)}
          style={{
            flex: 1,
            background: "#28a745",
            color: "#fff",
            border: "none",
            padding: "8px 0",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Cart
        </button>

        <button
          onClick={() => buyNow(product)}
          style={{
            flex: 1,
            background: "#ff9f00",
            color: "#fff",
            border: "none",
            padding: "8px 0",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;