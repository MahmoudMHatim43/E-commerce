import React from "react";

function Subscribe() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-lg md:w-[90%] mx-auto shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">
            Stay Updated with Our Latest Offers
          </h2>
          <p className="text-white mt-2 max-w-md">
            Subscribe to receive updates on our products, services, and
            promotions. We value your privacy and will process your data in
            accordance with our privacy policy.
          </p>
        </div>
        <form className="flex w-full max-w-md md:w-auto">
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-grow p-3 rounded-l-md bg-white text-gray-700 outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="p-3 bg-purple-700 text-white rounded-r-md hover:bg-purple-800 transition duration-300 ease-in-out">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
