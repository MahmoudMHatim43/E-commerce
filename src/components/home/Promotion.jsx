import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Promotion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ x: -200, opacity: 0.25 }}
      animate={{ x: isInView ? 0 : -200, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col sm:flex-row justify-center items-center
      mx-auto mt-[5vh] p-4 w-[95svw] sm:w-[90vw] min-h-[40vh] 
      bg-gradient-to-r from-gray_l1 to-gray_l2 dark:from-gray_d1 dark:to-gray_d2
      rounded-xl shadow-lg"
    >
      <motion.img
        src="promo.webp"
        alt="Promotion"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="object-cover 
        w-full sm:w-1/2 h-auto max-h-[250px] 
        rounded-lg shadow-md"
      />

      <motion.div
        initial={{ x: 200, rotate: 0, opacity: 0 }}
        animate={{
          x: isInView ? 0 : 200,
          rotate: isInView ? -5 : 0,
          opacity: 1,
        }}
        transition={{ delay: 0.5, duration: 1 }}
        className="sm:ml-8 mt-6 sm:mt-0
        text-center sm:text-left text-white font-Caveat font-bold"
      >
        <p className="text-4xl sm:text-5xl">
          <span className="text-orange_c">20% OFF</span> THIS{" "}
          <span className="text-orange_c">WEEKEND</span>!
        </p>
        <p className="text-3xl sm:text-4xl mt-2">
          CATCH THE <span className="text-red-600">CHANCE</span>!
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Promotion;
