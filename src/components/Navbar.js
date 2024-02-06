import React from "react";
import logo from "../logo.png";

function Navbar() {
  const navLink = [
    { name: "Home", url: "/home" },
    { name: "Tv Shows", url: "/home" },
    { name: "Movies", url: "/home" },
    { name: "News & Populars", url: "/home" },
    { name: "My List", url: "/home" },
    { name: "Browse by Language", url: "/home" },
  ];

  return (
    <div className="flex bg-black w-full h-16 ">
      <img className="brightness-200 ml-12" src={logo} alt="logo" />
      <div className="flex  text-white justify-center items-center gap-4 ml-10 text-sm font-bold">
        {navLink.map((navs) => (
          <div key={navs.url}>
            <a href={navs.url}> {navs.name} </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
