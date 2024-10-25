import Image from "next/image";
import Link from "next/link";
import { seedProducts } from "@/product";
import { chemicalProducts } from "@/product";
import { Machinery } from "@/product";

const page = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-19rem)] mt-[8rem] overflow-hidden ">
        <Image
          src="/seeds/R3.jpg"
          alt="img"
          fill
          className="absolute inset-0 top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-green-500 bg-opacity-70 ">
          <h1 className="text-center font-bold text-5xl md:text-6xl lg:text-7xl my-40 text-white">
            Product
          </h1>
        </div>
      </div>

      <div className=" px-4 pt-9 md:pt-11 xl:pt-14">
        <h1 className="font-bold text-black text-3xl pt-5 md:pt-6 lg:pt-7 md:text-4xl lg:text-5xl">
          Our Products
        </h1>

        <div className="w-screen overflow-x-scroll pt-10 md:mt-9 lg:mt-11">
          <div className="w-max flex">
            {seedProducts.map((product) => (
              <div
                key={product.id}
                className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] hover:bg-green-300 transition-all duration-300"
              >
                
                {product.img && (
                  <div className="relative flex-1 w-full">
                    <Image
                      src={product.img}
                      alt="img"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center py-4 mt-2">
                  <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
                  <p className="p-4 2xl:p-8">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-screen overflow-x-scroll mt-7 md:mt-9 lg:mt-11">
          <div className="w-max flex">
            {chemicalProducts.map((product) => (
              <div
                key={product.id}
                className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] hover:bg-green-300 transition-all duration-300"
              >
                
                {product.img && (
                  <div className="relative flex-1 w-full">
                    <Image
                      src={product.img}
                      alt="img"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center py-4 mt-2">
                  <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
                  <p className="p-4 2xl:p-8">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-screen overflow-x-scroll mt-7 md:mt-9 lg:mt-11">
          <div className="w-max flex">
            {Machinery.map((product) => (
              <div
                key={product.id}
                className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] hover:bg-green-300 transition-all duration-300"
              >
                
                {product.img && (
                  <div className="relative flex-1 w-full">
                    <Image
                      src={product.img}
                      alt="img"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center py-4 mt-2">
                  <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
                  <p className="p-4 2xl:p-8">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-8 bg-green-500 m-5 rounded-xl mt-10 md:mt-17">
        <p className="mt-2 text-sm md:text-xl text-white">
            Trust <span className="font-bold">AD Forerunner Agro Ventures</span> for all your agricultural needs. Our team is dedicated to helping you succeed. Purchase our products today and enjoy reliable performance, backed by our comprehensive warranty and support. <Link href="/contact" className="text-gray-500 underline hover:text-gray-300 transition-all duration-400">Contact us today to get your product.</Link>
        </p>
      </div>
    </>
  );
};

export default page;
