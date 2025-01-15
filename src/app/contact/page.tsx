import Image from "next/image";

const page = () => {
  return (
    <>
    <div className="">
      <div className="relative h-[calc(100vh-19rem)] mt-[8rem] overflow-hidden">
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
      </div>

      <div className=" px-4 pt-9  md:pt-11 xl:pt-14">
        <h1 className="font-bold text-black text-3xl pt-5 md:pt-6 lg:pt-7 md:text-4xl lg:text-5xl">
          Contact us
        </h1>
        <p className="pt-3 md:text-xl lg:text-2xl">Our lines are instant and always open within the time of work.</p>
        <span className="font-bold md:text-xl lg:text-2xl">9:00am-6:00pm</span> <br />
        <span className="font-bold md:text-xl lg:text-2xl">Mondays-Fridays</span>

     
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.344453022905!2d8.540171374231932!3d12.01979078821495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae813a3b702983%3A0x2a6776e06906a7d2!2sEl-dorado%20Cinema!5e0!3m2!1sen!2sng!4v1736968882755!5m2!1sen!2sng" width="300" height="450" className="border-none rounded-xl mt-5 md:w-[600px]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       

      </div>
    </>
  );
};

export default page;
