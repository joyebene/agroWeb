import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";


const page = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-18rem)] mt-[8rem] overflow-hidden ">
        <Image
          src="/seeds/R7.jpg"
          alt="img"
          fill
          className="absolute inset-0 top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-green-500 bg-opacity-70 ">
          <h1 className="text-center font-bold text-5xl md:text-6xl lg:text-7xl my-40 text-white">
            About Us
          </h1>
        </div>
      </div>

      <div className="px-4 pt-10 md:pt-11 xl:pt-14 bg-white">
        <h1 className="font-bold text-black text-3xl md:text-4xl lg:text-5xl">
          About us
        </h1>
        <div className="flex flex-col items-center justify-center md:flex-row w-full gap-5">
          <p className="pt-2 md:pt-3 lg:pt-4 h-1/2 md:w-1/2 md:text-xl">
            AD Forerunner Agro Venture is a dynamic business that specializes in agro-related activities designed to drive growth and innovation
            while meeting the diverse needs of the agricultural sector. Our
            business model integrates general contracts and merchandise,
            commercial agriculture, sales of agro-allied products, and
            import-export operations to deliver comprehensive solutions across
            the industry.{" "}
            <Link
              href="/product"
              className="font-bold text-gray-500 underline hover:text-green-500 "
            >
              Click to see our products
            </Link>
          </p>
          <Image
            src="/machinery/R8.jpg"
            alt="img"
            width={400}
            height={400}
            className="object-cover rounded-3xl shadow-xl md:w-1/2 mr-5 md:mr-10 mx-5 "
          />
        </div>
      </div>

      <div className="px-4 pt-24 pb-14 md:px-5 ">
        <h1 className="font-bold text-black text-3xl md:text-4xl lg:text-5xl pl-1">
          Services
        </h1>

        <Services />
      </div>
      <div className="px-6 py-8 bg-green-500 m-5 rounded-xl md:mt-17">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Our Mission
        </h1>
        <p className="mt-2 text-sm md:text-xl text-white">
          Our mission is to ensure high standards and reliability in all
          contractual and product-related engagements, thus boosting yields and
          meeting market demands by making available staple foods as well as
          high level protein food from animal. We are committed to delivering
          quality products that improve customers. While we hope to facilitate
          the international trade of agricultural goods, connecting local
          producers with global markets.
        </p>
      </div>
    </>
  );
};

export default page;
