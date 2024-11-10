import { galleryImages } from "@/product";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-19rem)] mt-[8rem] overflow-hidden ">
        <Image
          src="/hero/R8.jpg"
          alt="img"
          fill
          className="absolute inset-0 top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-green-500 bg-opacity-70 ">
          <h1 className="text-center font-bold text-5xl md:text-6xl lg:text-7xl my-40 text-white">
            Gallery
          </h1>
        </div>
        </div>
      

      <div className="px-4 pt-9 md:pt-11 xl:pt-14 bg-white ">
        <h1 className="font-bold text-black text-3xl pt-5 md:pt-6 lg:pt-7 md:text-4xl lg:text-5xl">
          Our Gallery
        </h1>
      </div>
          <div className="pt-10 md:mt-9 lg:mt-11 w-screen flex flex-wrap">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className=" h-[30vh] w-1/2 md:w-1/3 md:h-[50vh] xl:h-[60vh] p-4 flex items-stretch hover:scale-110 transition-all duration-300 "
              >
                
                {image.img && (
                  <div className="relative w-full flex">
                    <Image
                      src={image.img}
                      alt="img"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="px-6 py-5 bg-green-500 m-5  mt-7 rounded-xl md:mt-12 xl:mt-14">
        <p className="mt-2 text-sm md:text-xl text-white">
          Explore our agricultural solutions and take the first step towards a bountiful harvest. <Link href="/contact" className="font-bold text-gray-500 underline hover:text-gray-300 transition-all duration-200" >Contact us today!</Link>
        </p>
      </div>
      
     </>
  )
}

export default page;

// w-[50vw] md:w-[33vw] xl:w-[13vw] xl:h-[90vh]