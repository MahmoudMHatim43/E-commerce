import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
      flex justify-center items-center
      p-4 m-2
      rounded-lg shadow-lg
      bg-white dark:bg-dark-main
      border border-gray-300 dark:border-gray-600
      ">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full max-w-[600px] p-3 text-light-t1 dark:text-dark-t1 bg-transparent border-none outline-none"
      />
      <button className="p-3 bg-blue-600 text-white rounded-lg ml-2 hover:bg-blue-500 transition duration-300">
        <FaSearch />
      </button>
    </motion.div>
  );
}

export default Search;
