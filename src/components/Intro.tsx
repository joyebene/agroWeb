import React from "react";
import Image from "next/image";
import Slider from "./Slider";

const Intro = () => {
  return (
    <div className="">

    {/* INTRO SECTION */}
    <div className=" relative flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center bg-white  text-green-600 h-[calc(100vh-6rem)] p-4 w-screen  rounded-lg md:px-16">

      {/* TEXT CONTaINER */}
      <div className=" text-center flex-1 md:w-[45%] pr-4 bg-white ">
        <h1 className="font-bold text-4xl flex-wrap pt-9 pb-4 md:text-5xl lg:text-6xl">Welcome to AD Forerunner Agro venture</h1>
        <p className="px-2 text-lg md:text-lg lg:text-xl">
        AD Forerunner Agro venture is a dynamic business that specializes in agro-related activities designed to drive growth and innovation while meeting diverse needs of the agricultural sector. Our business model is to ensure delivery of comprehensive solutions across the industry. 
        </p>
      </div>

      {/* IMaGE CONTaINER */}


      <div className="relative flex-1 w-[90%] shadow-xl md:hidden rounded-xl overflow-hidden p-5 mt-5">
        <Slider />
      </div>

      






      <div className="relative w-full flex-1 md:w-[45%] shadow-xl md:h-[70%] pl-4 rounded-xl hidden md:block ">
        <Image src="/hero/R6.jpg" alt="img" fill className="object-cover rounded-xl " />
      </div>
    </div>

    {/* WHAT WE OFFER SECTION */}
    <div className="py-12 w-full mt-7">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center text-green-500 my-4">What We Do</h1>
      <div className="flex flex-col md:flex-row md:items-stretch items-center justify-center mt-6 px-6 md:px-10">
        <div className=" p-4 text-center bg-green-500 m-5 rounded-2xl shadow-xl">
          <Image src="/icon9.png" alt="img" width={100} height={100} className="mx-auto mb-2 mt-1" />
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">Integrate General Contracts and Merchandise</h2>
          <p className="">We manage and execute a variety of contracts related to agricultural projects and provide essential merchandise to support farming operations.</p>
        </div>
        <div className="p-4 text-center bg-green-500 m-5 rounded-2xl shadow-xl">
        <Image src="/icon7.png" alt="img" width={100} height={100} className="mx-auto mb-2 mt-1"/>
          
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">Commercial Agriculture</h2>
          <p className="">We cultivate success through high-yielding crops, strategic market analysis, and cost-effetive operations, ensuring sustainable profits for our stakeholders.</p>
        </div>
        <div className="p-4 text-center bg-green-500 m-5 rounded-2xl shadow-xl">
          <Image src="/icon6.png" alt="img" width={100} height={100} className="mx-auto mb-2 mt-1" />
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">Sales of Agro-allied Products</h2>
          <p className="">We offer a wide range of agro-allied products including seeds, fertilizers, and pest control solutions. </p>
        </div>
        <div className="p-4 text-center bg-green-500 m-5 rounded-2xl shadow-xl">
          <Image src="/icon4.png" alt="img" width={100} height={100} className="mx-auto mb-2 mt-1" />
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">Import-export Operations</h2>
          <p className="">Our expertise in logistics and trade will ensure handling of imports and exports, contributing to a robust supply chain. </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Intro;
