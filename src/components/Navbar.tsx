"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOPen] = useState(false);

  return (
    <>
      {!open ? (
        // <div className="flex items-center justify-between p-2 px-6 lg:px-20 border-b-2 border-green-500 h-24 w-full">
          <div className="fixed top-0 left-0 w-full z-10 bg-gray-800 text-white flex items-center justify-between p-2 px-6 lg:px-20 h-24 ">
          {/* Nav LOGO */}
          <div className="relative">
            <Image
              src="/nav.jpg"
              alt="img"
              width={60}
              height={60}
              className="object-contain rounded-tl-xl rounded-br-xl"
            />
          </div>

          {/* Nav ITEMS */}
          <div className=" text-green-500 ">
            <ul className="hidden md:flex md:items-center md:justify-between ">
              <li className="hover:text-white transition-all duration-1000 ">
                <Link href="/" className="lg:text-xl md:text-lg">
                  Home page
                </Link>
              </li>
              <li className="ml-5 hover:text-white transition-all duration-1000">
                <Link href="/about" className="lg:text-xl md:text-lg">
                  About us
                </Link>
              </li>
              <li className="ml-5 hover:text-white transition-all duration-1000">
                <Link href="/product" className="lg:text-xl md:text-lg">
                  Product
                </Link>
              </li>
              <li className="ml-5 hover:text-white transition-all duration-1000">
                <Link href="/blog" className="lg:text-xl md:text-lg">
                  Blog
                </Link>
              </li>
              <li className="ml-5 hover:text-white transition-all duration-1000">
                <Link href="/gallery" className="lg:text-xl md:text-lg">
                  Gallery
                </Link>
              </li>
              <li className="ml-5 hover:text-white transition-all duration-1000">
                <Link href="/contact" className="lg:text-xl md:text-lg">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className=" md:hidden">
            <Image
              src="/open.png"
              alt="img"
              width={50}
              height={50}
              className="object-contain"
              onClick={() => setOPen(true)}
            />
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 w-full z-10 bg-black bg-opacity-90 text-white h-screen">
          <div className="flex items-center justify-between h-24 px-6">
            <div className="relative">
              <Image
                src="/nav.jpg"
                alt="img"
                width={60}
                height={60}
                className="object-contain rounded-tl-xl rounded-br-xl"
              />
            </div>
            <div className="relative">
              <Image
                src="/close.png"
                alt="img"
                width={50}
                height={50}
                className="object-contain"
                onClick={() => setOPen(false)}
              />
            </div>
          </div>

          <ul className="flex flex-col gap-8 items-center justify-center h-[70%]">
            <li className="ml-5 hover:text-green-500 transition-all duration-1000">
              <Link href="/" className="text-2xl" onClick={()=>setOPen(false)}>
                Home page
              </Link>
            </li>
            <li className="ml-5 hover:text-green-500 transition-all duration-1000">
              <Link href="/about" className="text-2xl" onClick={()=>setOPen(false)}>
                About us
              </Link>
            </li>
            <li className="ml-5 hover:text-green-500 transition-all duration-1000">
              <Link href="/product" className="text-2xl" onClick={()=>setOPen(false)}>
                Product
              </Link>
            </li>
            <li className="ml-5 hover:text-green-500 transition-all duration-1000">
              <Link href="/blog" className="text-2xl"onClick={()=>setOPen(false)}>
                Blog
              </Link>
            </li>
            <li className="ml-5 hover:text-green-500 transition-all duration-1000">
              <Link href="/gallery" className="text-2xl" onClick={()=>setOPen(false)}>
                Gallery
              </Link>
            </li>
            <li className="ml-5 hover:text-green-500 transition-all duration-1000">
              <Link href="/contact" className="text-2xl" onClick={()=>setOPen(false)}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Nav TaG */}
    </>
  );
};

export default Navbar;
