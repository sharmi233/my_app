import React from "react";

function Home() {
  // Full screen hero
  const heroStyle = {
    backgroundImage: "url('https://i.pinimg.com/1200x/21/7c/20/217c20f65768aa0bae71c81b64a246b3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // full screen height
    width: "100%",   // full width
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };

  const titleStyle = {
    fontSize: "4rem",
    textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
    margin: 0
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
    marginTop: "10px"
  };

  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>Sweet Chocolate</h1>
      <p style={subtitleStyle}>Indulge in the finest chocolates!</p>
    </div>
  );
}

export default Home;
