import React from "react";
import { motion } from "framer-motion";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

function Hero() {
  return (
    <motion.section
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col lg:flex-row justify-between items-center gap-4 
      mt-[5vh] mx-auto p-4
      w-[95svw] sm:w-[90vw] min-h-[50vh] 
      text-light_t1 dark:text-dark_t1
      rounded-2xl shadow-lg"
    >
      {/* Left */}
      <div
        className="flex flex-col justify-center sm:items-start items-center gap-4 
        p-4
        text-center sm:text-left font-Josefin"
      >
        <h1 className="text-heading-xl font-bold">
          Welcome to <span className="text-blue_l">The Store</span>, Where your{" "}
          <span className="text-blue_l">Style</span> is our{" "}
          <span className="text-orange_c">PRIORITY</span>.
        </h1>
        <hr
          className="w-3/4 sm:w-full
          border-t-2 border-gray_d1 dark:border-gray_l1"
        />
      </div>

      {/* Right */}
      <div
        className="flex flex-col items-center gap-4
        w-full lg:w-[50%]"
      >
        <motion.img
          src="hero.webp"
          alt="Store image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="object-cover
          w-full h-auto max-h-[300px]
          rounded-xl shadow-xl"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center items-center gap-2
          p-[1em_3em] 
          text-body-text bg-blue_d dark:bg-blue_l text-white font-semibold
          rounded-2xl shadow-md"
        >
          Shop Now <MdOutlineSubdirectoryArrowRight />
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Hero;
