import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BuyNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const finalPrice = location.state?.totalAmount || location.state?.product?.price || 0;

  const [formData, setFormData] = useState({
    name: "", address: "", phone: "", paymentMethod: "cod", bankName: "", upiId: "", secretCode: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill name, address, and phone number!");
      return;
    }
    if (formData.paymentMethod === "online") {
      if (!formData.bankName || !formData.upiId || !formData.secretCode) {
        alert("Online payment details are required!");
        return;
      }
      if (formData.secretCode.length !== 4) {
        alert("Secret code must be exactly 4 digits!");
        return;
      }
    }
    alert("🎉 Order Successfully Placed! Thank you.");
    navigate("/");
  };

  // 🔹 Here is the background style
  const pageStyle = {
    minHeight: "100vh",
    backgroundImage: "url('https://i.pinimg.com/736x/99/ee/60/99ee60ec5bd74cb6d6aaf6a75593212d.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "30px",
    paddingBottom: "30px"
  };

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.9)" }}>
        <h2 style={{ textAlign: "center", color: "#d35400" }}>Checkout</h2>
        <h3 style={{ textAlign: "center" }}>Total to Pay: ₹ {finalPrice}</h3>
        <hr />

        <form onSubmit={handleSubmit}>
          <h4>Customer Information</h4>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} style={inputStyle} required />
          <textarea name="address" placeholder="Shipping Address" onChange={handleChange} style={inputStyle} required />
          <input type="number" name="phone" placeholder="Phone Number" onChange={handleChange} style={inputStyle} required />

          <h4>Select Payment Method</h4>
          <div style={{ margin: "10px 0" }}>
            <label><input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === "cod"} onChange={handleChange} /> Cash on Delivery</label>
            <label style={{ marginLeft: "20px" }}><input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === "online"} onChange={handleChange} /> Online Payment</label>
          </div>

          {formData.paymentMethod === "online" && (
            <div style={{ background: "#f1f1f1", padding: "15px", borderRadius: "8px", marginTop: "10px" }}>
              <input type="text" name="bankName" placeholder="Bank Name" onChange={handleChange} style={inputStyle} required />
              <input type="text" name="upiId" placeholder="UPI ID (example@upi)" onChange={handleChange} style={inputStyle} required />
              <input type="password" name="secretCode" placeholder="4-Digit Secret PIN" maxLength="4" onChange={handleChange} style={inputStyle} required />
            </div>
          )}

          <button type="submit" style={submitBtnStyle}>Confirm & Place Order</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = { width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" };
const submitBtnStyle = { width: "100%", padding: "12px", background: "#27ae60", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "15px" };

export default BuyNow;
