import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, increaseQty, decreaseQty, removeItem }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    navigate("/order", { state: { totalAmount: total } });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Shopping Cart 🛒</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ddd", padding: "10px" }}>
              <div>
                <h4>{item.name}</h4>
                <p>₹ {item.price} x {item.qty}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={() => decreaseQty(item.id)} style={btnStyle}>-</button>
                <b style={{ margin: "0 10px" }}>{item.qty}</b>
                <button onClick={() => increaseQty(item.id)} style={btnStyle}>+</button>
                <button onClick={() => removeItem(item.id)} style={{ ...btnStyle, background: "red", color: "white", marginLeft: "15px" }}>Remove</button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <h3>Total: ₹ {total}</h3>
            <button onClick={handleCheckout} style={buyBtnStyle}>
              Proceed to Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const btnStyle = { padding: "5px 12px", cursor: "pointer", border: "1px solid #ccc", background: "#fff" };
const buyBtnStyle = { padding: "12px 25px", background: "orange", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" };

export default Cart;