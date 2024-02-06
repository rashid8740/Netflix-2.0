import React from "react";
import logo from "../logo.png";
import profile from "../profile.png";
import { BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

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
      {/* left-side */}
      <>
        <img className=" ml-12" src={logo} alt="logo" />
        <div className="flex  text-white justify-center items-center gap-4 ml-10 text-sm font">
          {navLink.map((navs) => (
            <div key={navs.url}>
              <a href={navs.url}> {navs.name} </a>
            </div>
          ))}
        </div>
      </>
      {/* right-side */}
      <div className="flex justify-center items-center ml-auto mx-16 text-white gap-5">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <h1>Kids</h1>
        <BellIcon className="h-6 w-6" />
        <div>
          <img className=" h-6 w-6 " src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
