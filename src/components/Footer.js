import React from "react";

const footerLinkONe = [
  { name: "Audio Description", url: "/home" },
  { name: "Investor Relations", url: "/home" },
  { name: "Legal Notices", url: "/home" },
];
const footerLinkTwo = [
  { name: "Help Center", url: "/home" },
  { name: "Jobs", url: "/home" },
  { name: "Cookie Preference", url: "/home" },
];
const footerLinkThree = [
  { name: "Gift Cards", url: "/home" },
  { name: "Terms of Use ", url: "/home" },
  { name: "Corporate Information", url: "/home" },
];
const footerLinkFour = [
  { name: "Media Center", url: "/home" },
  { name: "Privacy", url: "/home" },
  { name: "contact Us", url: "/home" },
];

function Footer() {
  return (
    <div className="flex bg-black text-gray-400 w-full justify-between p-4 text-sm ">
      <div>
        {footerLinkONe.map((nav, index) => (
          <div key={index} className="p-3">
            <a href={nav.url}>{nav.name}</a>
          </div>
        ))}
      </div>

      <div>
        {footerLinkTwo.map((nav, index) => (
          <div key={index} className="p-3">
            <a href={nav.url}>{nav.name}</a>
          </div>
        ))}
      </div>

      <div>
        {footerLinkThree.map((nav, index) => (
          <div key={index} className="p-3">
            <a href={nav.url}>{nav.name}</a>
          </div>
        ))}
      </div>

      <div>
        {footerLinkFour.map((nav, index) => (
          <div key={index} className="p-3">
            <a href={nav.url}>{nav.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
