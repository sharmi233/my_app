import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/product";

function Menu({ addToCart, buyNow }) {
  const pageStyle = {
    // 1. Full Page Background Image
    backgroundImage: "url('https://i.pinimg.com/1200x/c7/f4/d2/c7f4d2f153efb5968b34e95a2c3dd4e9.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Scroll panna image move aagama iruka
    minHeight: "100vh",
    width: "100%",
    padding: "40px 20px",
    boxSizing: "border-box"
  };

  const gridContainerStyle = {
    display: "grid",
    // 2. Exact-a 1 line-la 4 cards varum
    gridTemplateColumns: "repeat(4, 1fr)", 
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const overlayStyle = {
    // Background image mela cards nalla theriya chinna overlay
    backgroundColor: "rgba(0, 0, 0, 0.4)", 
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 1
  };

  return (
    <div style={pageStyle}>
      {/* Cards list mattum dhaan irukum */}
      <div style={gridContainerStyle}>
        {products.map((product) => (
          <div key={product.id} style={{ zIndex: 2 }}>
             <ProductCard
              product={product}
              addToCart={addToCart}
              buyNow={buyNow}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;