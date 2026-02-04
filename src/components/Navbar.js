import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ cartCount }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        background: "#8B4513", // Chocolate brown color
        color: "#fff",
        fontWeight: "bold",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Logo / Brand Name */}
      <div style={{ fontSize: "1.5rem" }}>Choco Bee</div>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "25px", fontSize: "1rem" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/menu" style={linkStyle}>Menu</Link>
        <Link to="/cart" style={linkStyle}>
          Cart 🛒 <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  transition: "0.3s",
};

export default Navbar;
