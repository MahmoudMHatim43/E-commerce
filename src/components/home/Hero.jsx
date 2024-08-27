import { motion } from "framer-motion";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section-css flex flex-col items-center justify-evenly h-[90svh] p-4">
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}>
        <h1 className="text-[5.5rem] sm:text-9xl text-center text-balance text-white font-Josefin font-bold tracking-tighter md:tracking-wide leading-none p-2">
          <span> YOUR </span>
          <span> STYLE</span> IS OUR
          <span className="text-orange-cstm"> PRIORITY</span>
        </h1>
      </motion.div>
      <div className="flex justify-center gap-4 w-full">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative z-50 cursor-pointer flex items-center gap-2 p-[1em_2em]
          text-body-text text-center text-white font-Nuntio font-semibold
         bg-blue-900 hover:bg-blue-700 duration-300
          rounded-lg">
          <span>Shop Now</span>
          <FaArrowRight />
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative z-50 cursor-pointer flex items-center gap-2 p-[1em_2em]
          text-body-text text-center text-white font-Nuntio font-semibold
        bg-gray-700 hover:bg-gray-500 duration-500
          rounded-lg">
          <span>View Cart</span>
          <FaShoppingCart />
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
