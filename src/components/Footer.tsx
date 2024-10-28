import React from "react";

const Footer = () => {
  return (
    <div className="text-green-500">
      <hr className="text-gray-500 mx-4 md:mx-5" />
      <div className="flex items-center justify-evenly py-6 text-base md:text-lg">
        <span>Facebook</span> <span>Twitter</span> <span>Instagram</span>{" "}
        <span></span>
      </div>

      <div className="text-center text-sm md:text-base py-5">
        &copy; Copyright 2024-AD Forerunner Agro Ventures
      </div>
    </div>
  );
};

export default Footer;
