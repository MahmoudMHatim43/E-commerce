import { motion } from "framer-motion";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="
      hero-section-css
      flex flex-col items-center justify-evenly
      min-h-[100svh]
      p-4
      shadow-lg
      "
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hero-text-container w-full"
      >
        <h1
          className="
          text-[6rem] sm:text-9xl tracking-tighter md:tracking-wider leading-none text-white font-josefin text-balance font-bold overflow-hidden"
        >
          <span className="text-blue-800">YOUR </span>
          <span className="text-blue-800"> STYLE</span> IS OUR
          <span className="text-orange-cstm"> PRIORITY</span>
        </h1>
        <hr className="w-[70%] my-4 border-2 border-orange-cstm" />
      </motion.div>
      <div
        className="
        flex justify-center gap-6
        w-full
        p-2
        "
      >
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="
          relative z-10 cursor-pointer
          flex items-center gap-2
          p-[1em_2em]
          text-body-text text-center text-white font-Nuntio font-semibold
         bg-blue-900 hover:bg-blue-800 duration-300
          rounded-lg
         "
        >
          <span>Shop Now</span>
          <FaArrowRight />
        </motion.button>
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="
        relative z-10 cursor-pointer
        flex items-center gap-2
        p-[1em_2em]
        text-body-text text-center text-white font-Nuntio font-semibold
        bg-gray-600 hover:bg-gray-500 duration-300
        rounded-lg
        "
        >
          <span>View Cart</span>
          <FaShoppingCart />
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
