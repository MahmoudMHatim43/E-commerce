import ToggleButton from "../ToggleButton";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaShoppingCart,
  FaBars,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";

function Hero() {
  const [mode, setMode] = useState("Dark Mode");
  const handldeTheme = (isOn) => {
    if (isOn) {
      document.documentElement.classList.add("dark");
      setMode("Light Mode");
      return;
    }
    document.documentElement.classList.remove("dark");
    setMode("Dark Mode");
  };
  return (
    <section
      className="
      hero-section-css
      flex flex-col items-center justify-evenly
      w-full h-[100svh] sm:h-[92.5svh]
      p-2 mt-0 sm:mt-[7.5svh]
      shadow-lg
      "
    >
      <div className="sm:hidden">
        <FaBars
          className="
        absolute top-4 left-4 z-10
        text-3xl text-orange-cstm"
        />
        <ToggleButton onToggle={handldeTheme} theme={mode} />
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hero-text-container w-full"
      >
        <h1 className="text-[6rem] sm:text-9xl tracking-tighter md:tracking-wider leading-none text-white font-josefin text-balance font-bold overflow-hidden">
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
        bg-blue-900
        rounded-xl shadow shadow-fuchsia-800
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
        bg-gray-600
        rounded-xl shadow shadow-fuchsia-800"
        >
          <span>View Cart</span>
          <FaShoppingCart />
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
