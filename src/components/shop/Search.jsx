import React from "react";

function Search() {
  return (
    <div
      className="
    col-span-12 flex justify-center items-center
    p-4
    rounded-lg border"
    >
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full max-w-[600px] p-2 text-light-t1 dark:text-dark-t1 bg-white dark:bg-dark-main border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none"
      />
      <button className="p-2 bg-blue-700 text-white rounded-r-lg hover:bg-blue-600 transition">
        Search
      </button>
    </div>
  );
}

export default Search;
