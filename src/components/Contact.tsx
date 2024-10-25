import React from "react";

const Contact = () => {
  return (
    <div className="py-16 px-5 text-green-500">
      <h1 className="font-bold text-green-600 text-2xl md:text-3xl lg:text-4xl">
        Contact us
      </h1>

      <div className="flex flex-col md:flex-row md:items-center pl-3 pt-3 gap-5">
        <div className="">
          <h2 className="text-green-600 font-semibold text-xl">
            Office Address
          </h2>
          <p className="pt-1">
            No 5a Craig Street, <br /> Kano Line, <br /> Kano, <br />
            Nigeria.
          </p>
        </div>
        <div className="md:pl-24">
          <h2 className="text-green-600 font-semibold pb-1 text-xl">
            For Enquiry
          </h2>
          <span>info@adforerunneragroventures.com</span> <br />
          <span>+234 8172563702</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
