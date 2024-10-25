import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-19rem)] mt-[8rem] overflow-hidden ">
        <Image
          src="/seeds/Img.webp"
          alt="img"
          fill
          className="absolute inset-0 top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-green-500 bg-opacity-70 ">
          <h1 className="text-center font-bold text-5xl md:text-6xl lg:text-7xl my-40 text-white">
            Blog
          </h1>
        </div>
      </div>
      <div className="my-14 md:my-16 xl:my-20">
        <p className="text-center text-3xl md:text-4xl xl:text-5xl ">
          <a href="https://hastomnigeria.com/blog/" className="border-2 border-gray-500 px-6 py-4 rounded-xl  hover:bg-gray-500 hover:text-white transition-all duration-200 ">Click To See Blog</a>
        </p>
      </div>
    </>
  );
};

export default page;
