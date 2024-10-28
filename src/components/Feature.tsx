import Image from "next/image";
import Link from "next/link";


const Feature = () => {
  return (
    <div className="py-10 px-5 h-96 md:px-10 lg:px-15">
      <h1 className="font-bold text-green-500 text-2xl md:text-3xl lg:text-4xl pb-5">Features</h1>

      {/*MOBILE PRODUCTS */}
      <div className="flex items-center justify-center h-[80%] lg:hidden ">
        <Link
          href="/product"
          className="w-1/3 shadow-md mr-3 rounded-lg h-full flex flex-col items-center relative "
        >
          <h1 className="pt-5 text-lg text-center px-2">Seeds</h1>
          <Image
            src="/seeds/R6.jpg"
            alt="img"
            fill
            className="object-contain px-2 "
          />
          <span className="mt-36  text-gray-500" >Explore...</span>
        </Link>

        <Link href="/product" className="w-1/3 shadow-md mr-3 rounded-lg h-full flex flex-col items-center relative">
          <h1 className="pt-5 text-lg text-center px-2">Chemicals</h1>
          <Image
            src="/chemicals/R5.webp"
            alt="img"
            fill
            className="object-contain px-2"
          />

          <span className="mt-36 text-gray-500">Explore...</span>
        </Link>
        <Link href="/product" className="w-1/3 shadow-md mr-3 rounded-lg h-full flex flex-col items-center relative">
          <h1 className="pt-5 text-lg text-center px-2">Equip/Mach</h1>
          <Image
            src="/machinery/R7.jpg"
            alt="img"
            fill
            className="object-contain px-2 pt-3"
          />

          <span className="mt-36 text-gray-500">Explore...</span>
        </Link>
      </div>



      {/* DESKTOP PRODUCT */}
      <div className="items-center justify-center h-[80%] hidden lg:flex px-5 pt-5">
        <Link
          href="/product"
          className="w-1/3 shadow-md mr-3 rounded-lg h-full flex flex-col items-center relative"
        >
          <h1 className="pt-5 text-lg text-center">Seeds</h1>
          <Image
            src="/seeds/R6.jpg"
            alt="img"
            fill
            className="object-contain px-2 transition-all duration-200 hover:scale-50 "
          />
          <span className="mt-36  text-gray-500" >Explore...</span>
        </Link>

        <Link href="/product" className="w-1/3 shadow-md mr-3 rounded-lg h-full flex flex-col items-center relative">
          <h1 className="pt-5 text-lg text-center">Agro Chem</h1>
          <Image
            src="/chemicals/R5.webp"
            alt="img"
            fill
            className="object-contain px-2 transition-all duration-200 hover:scale-50"
          />

          <span className="mt-36 text-gray-500">Explore...</span>
        </Link>
        <Link href="/product" className="w-1/3 shadow-md mr-3 rounded-lg h-full flex flex-col items-center relative">
          <h1 className="pt-5 text-lg text-center px-2">Equip and Mach</h1>
          <Image
            src="/machinery/R7.jpg"
            alt="img"
            fill
            className="object-contain px-2 pt-3 transition-all duration-200 hover:scale-50"
          />

          <span className="mt-32 text-gray-500">Explore...</span>
        </Link>
      </div>

    </div>
  );
};

export default Feature;
