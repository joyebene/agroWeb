import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-19rem)] mt-[8rem] overflow-hidden ">
        <Image
          src="/hero/R9.jpg"
          alt="img"
          fill
          className="absolute inset-0 top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-green-500 bg-opacity-70 ">
          <h1 className="text-center font-bold text-5xl md:text-6xl lg:text-7xl my-40 text-white">
            Contact Us
          </h1>
        </div>
      </div>

      <div className=" px-4 pt-9  md:pt-11 xl:pt-14">
        <h1 className="font-bold text-black text-3xl pt-5 md:pt-6 lg:pt-7 md:text-4xl lg:text-5xl">
          Contact us
        </h1>
        <p className="pt-3 md:text-xl lg:text-2xl">Our lines are instant and always open within the time of work.</p>
        <span className="font-bold md:text-xl lg:text-2xl">9:00am-6:00pm</span> <br />
        <span className="font-bold md:text-xl lg:text-2xl">Mondays-Fridays</span>

      </div>
    </>
  );
};

export default page;
