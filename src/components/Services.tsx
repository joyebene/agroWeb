import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-6 text-base md:text-xl px-1">
      <div className="flex flex-col gap-5">
        <p className="">
          <span className="font-bold text-xl">AD Forerunner Agro Ventures</span>{" "}
          manage and execute a variety of contracts related to agricultural
          projects and provide essential merchandise to support farming
          operations.
        </p>
        <Image
          src="/seeds/R5.jpg"
          alt="img"
          width={200}
          height={200}
          className="w-fit rounded-3xl "
        />
        <Link
          href="/gallery"
          className="flex md:justify-start justify-end font-semibold text-gray-500 underline hover:text-green-500"
        >
          See Gallery
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <p className="">
          <span className="font-bold text-xl">W</span>e engage in commercial
          agricultural activities, utilizing modern techniques and technologies
          to maximize productivity and efficiency. Our aim is to enhance
          agricultural output and sustainability through innovative practices..{" "}
        </p>
        <Image
          src="/hero/R2.webp"
          alt="img"
          width={200}
          height={200}
          className="w-fit rounded-3xl"
        />
        <Link
          href="/gallery"
          className="flex md:justify-start justify-end font-semibold text-gray-500 underline hover:text-green-500"
        >
          See Gallery
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <p className="">
          <span className="font-bold text-xl">W</span>e offer a wide range of
          agro-allied products including seeds, fertilizers, and pest control
          solutions.
          We hope our expertise in logistics and trade ensures efficient
          handling of imports and exports, contributing to a robust supply
          chain.{" "}
        </p>
        <Image
          src="/seeds/R4.jpg"
          alt="img"
          width={200}
          height={200}
          className="w-fit rounded-3xl -pt-1"
        />
        <Link
          href="/gallery"
          className="flex md:justify-start justify-end font-semibold text-gray-500 underline hover:text-green-500"
        >
          See Gallery
        </Link>
      </div>
    </div>
  );
};

export default Services;
