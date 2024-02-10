import React, { useState, useEffect } from "react";
import logo from "../logo.png";
import profile from "../profile.png";
import { BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLink = [
    { name: "Home", url: "/home" },
    { name: "Tv Shows", url: "/home" },
    { name: "Movies", url: "/home" },
    { name: "News & Populars", url: "/home" },
    { name: "My List", url: "/home" },
    { name: "Browse by Language", url: "/home" },
  ];

  return (
    <div
      className={`flex ${
        isScrolled ? "bg-black opacity-71" : "bg-transparent"
      } w-full h-auto sticky top-0 justify-center items-center transition-colors duration-300 ease-in-out`}
    >
      {/* left-side */}
      <>
        <img className="md:ml-12 ml-5 h-10 md:h-20" src={logo} alt="logo" />
        <div className="flex text-white justify-center items-center gap-4 ml-10 text-sm hidden md:flex">
          {navLink.map((nav, index) => (
            <div key={index}>
              <a href={nav.url}>{nav.name}</a>
            </div>
          ))}
        </div>
      </>
      {/* right-side */}
      <div className="flex justify-center items-center ml-auto md:auto text-white gap-5 mx-5">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <h1 className="hidden md:flex">Kids</h1>
        <BellIcon className="h-6 w-6" />
        <img className="h-6 w-6" src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Navbar;
