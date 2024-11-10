"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay to allow for the fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-6rem)] mt-[8rem] overflow-hidden">
      <video
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 h-full w-full inset-0 object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0  bg-green-500 bg-opacity-70 flex flex-col md:justify-center md:items-center justify-center items-start pl-10 gap-4">
        <div>
          <p className="uppercase text-white text-sm leading-tight text-balance font-bold md:text-sm md:text-center">
            Your partner in sustainable agriculture
          </p>
          <h1
            className={`uppercase font-bold text-4xl md:text:5xl lg:text-6xl text-balance leading-tight tracking-tight transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          >
            Ad Forerunner Agro Venture
          </h1>
        </div>
        <h2 className="bg-inherit md:text-xl lg:text-2xl md:text-center text-xl tracking-tight leading-tight">
          Cultivating a Sustainable Future, and <br />
          Empowering Agriculture Through Innovation
        </h2>
        <Link
          href="/about"
          className="rounded-md py-2 px-4  bg-white mt-5 text-black md:py-3 md:px-6 hover:bg-green-500 hover:border-2 hover:text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
