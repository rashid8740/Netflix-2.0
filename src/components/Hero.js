import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('../public/cover.jpeg')` }}
    >
      <Navbar />
      {/* Any additional content for your hero section can go here */}
    </div>
  );
}

export default Hero;
