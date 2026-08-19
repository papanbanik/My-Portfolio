import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 sm:gap-20 py-10 px-5 bg-gray-800 text-white w-full mt-20 px-10">
      {/* Left Section */}
      <div className="flex flex-col gap-5">
        <p className="text-gray-300 text-sm leading-6">
          From strategy to execution we craft <br /> digital solutions that move
          your business forward
        </p>
        <div className="flex flex-col text-sm text-gray-300  gap-1 mt-2">
          <div>Email : papanbanik58@gmail.com</div>
          <div>Phone: +8801767-013058</div>
          <div>Address: Mohakhali, Dhaka 1212</div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col mt-5 sm:mt-0">
        <h2 className="text-lg font-semibold">Subscribe to our newsletter</h2>
        <p className="text-gray-300 text-sm mt-2">
          The latest news articles and resources sent to your inbox weekly
        </p>
        <div className="flex gap-2 mt-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 outline-none border rounded"
          />
          <button className="border rounded-lg p-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
