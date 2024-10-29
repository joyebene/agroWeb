"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    '/hero/R6.jpg',
    '/gllry/V-img.jpg',
    '/gllry/V2.jpg',
    '/gllry/V0.jpg',
    '/gllry/V9.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalid = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalid);
  }, [currentIndex]);

  return (
    <div className=" overflow-hidden">
      <Image src={images[currentIndex]} alt="img" objectFit="cover" layout="fill" />
    </div>
  );
};

export default Slider;
