import React from "react";

function Subscribe() {
  return (
    <div className="bg-dark-smoke text-dark-t1 p-8 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Powering your business</h2>
          <p className="text-dark-t2 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nemo expedita
            voluptas culpa sapiente.
          </p>
        </div>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email..."
            className="p-2 rounded-l-md bg-gray-800 text-white outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-purple-500 text-white rounded-r-md hover:bg-purple-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
