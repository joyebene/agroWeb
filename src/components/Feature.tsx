import Image from "next/image";
import Link from "next/link";


const Feature = () => {
  return (
    <div className="py-10 mb-24 px-5 h-96 md:px-10 lg:px-15 bg-white">
      <h1 className="font-bold text-green-500 text-4xl md:text-5xl lg:text-6xl pb-8 text-center tracking-tight ">Feature Products</h1>

      {/*MOBILE PRODUCTS */}
      <div className="flex items-center justify-center h-[100%] lg:hidden flex-wrap ">
        <Link
          href="/product"
          className="w-1/3 shadow-md mr-3 rounded-lg h-1/2 flex flex-col items-center relative "
        >
          <h1 className="pt-5 text-lg text-center px-2">Seeds</h1>
          <Image
            src="/seeds/R6.jpg"
            alt="img"
            width={100} height={100}
            className="object-contain px-2 "
          />
          <span className=" pt-4  text-gray-500" >Explore...</span>
        </Link>

        <Link href="/product" className="w-1/3 shadow-md mr-3 rounded-lg  h-1/2  flex flex-col items-center relative">
          <h1 className="pt-5 text-lg text-center px-2">Chemicals</h1>
          <Image
            src="/chemicals/R5.webp"
            alt="img"
            width={100} height={100}
            className="object-contain px-2"
          />

          <span className=" pt-4 text-gray-500">Explore...</span>
        </Link>
        <Link href="/product" className="w-1/3 shadow-md mr-3 mt-3 rounded-lg  h-1/2  flex flex-col items-center relative">
          <h1 className="pt-5 text-lg text-center px-2 ">Equip/Mach</h1>
          <Image
            src="/machinery/R7.jpg"
            alt="img"
            width={100} height={100}
            className="object-contain px-2 pt-2"
          />

          <span className="pt-1 text-gray-500">Explore...</span>
        </Link>
        <Link href="/product" className="w-1/3 shadow-md mr-3 rounded-lg mt-3  h-1/2  flex flex-col items-center relative">
          <h1 className="pt-5 text-lg text-center px-2">Poultry</h1>
          <Image
            src="/hero/poultry.jpg"
            alt="img"
            width={100} height={100}
            className="object-contain px-2 pt-2 rounded-lg"
          />

          <span className="pt-2 text-gray-500">Explore...</span>
        </Link>
      </div>



      {/* DESKTOP PRODUCT */}
      <div className="items-center justify-center h-[80%] hidden lg:flex px-5 pt-5">
        <Link
          href="/product"
          className="w-1/3 shadow-md mr-3 rounded-lg h-full flex flex-col items-center relative"
        >
          <h1 className="pt-5 text-lg text-center px-2">Seeds</h1>
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
        <Link href="/product" className="w-1/3 shadow-md mr-3 rounded-lg h-full flex flex-col items-center relative">
          <h1 className="pt-5 text-lg text-center px-2">Poultry</h1>
          <Image
            src="/hero/poultry.jpg"
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
