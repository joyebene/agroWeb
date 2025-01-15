import React from "react";

const Footer = () => {
  return (
    <div className="text-green-500">
      <hr className="text-gray-500 mx-4 md:mx-5" />
      <div className="flex items-center justify-evenly py-6 text-base md:text-lg">
        <span><a href="https://www.facebook.com/share/19ynGv1Aid/?mibextid=wwXIfr">Facebook</a></span> <span>Twitter</span> <span> <a href="https://www.instagram.com/adforerunneragro?igsh=a2trMGhybHY5djlq&utm_source=ig_contact_invite">Instagram</a></span>{" "}
        <span></span>
      </div>

      <div className="text-center text-sm md:text-base py-5">
        &copy; Copyright 2024-AD Forerunner Agro Ventures
      </div>
    </div>
  );
};

export default Footer;
