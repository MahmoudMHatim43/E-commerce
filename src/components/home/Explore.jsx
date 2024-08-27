import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "../seperate/Tilt";

const headings = ["Top Quality", "Fast Delivery", "Exclusive Collection"];
const images = ["v-1.webp", "v-2.webp", "v-3.webp"];

function Explore() {
  const [vectorNo, setVectorNo] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section className="relative hidden md:flex justify-center gap-2 h-[90svh] overflow-visible">
      <Tilt />
      <motion.div
        ref={ref}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: isInView ? 0 : -200, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 flex flex-col gap-4 my-auto p-4">
        {headings.map((heading, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1 }}
            onHoverStart={() => setVectorNo(index)}
            whileHover={{ scale: 1.02 }}
            className="max-w-[600px] p-6 font-Nuntio bg-black hover:bg-zinc-900 overflow-hidden cursor-pointer border border-gray-700 rounded-lg shadow-md transition-all">
            <h2 className="font-bold text-2xl text-white mb-2">{heading}</h2>
            <p className="text-gray-300 text-base">
              {index === 0 &&
                "Our commitment to top quality ensures that every product you purchase meets the highest standards of craftsmanship and durability."}
              {index === 1 &&
                "Experience lightning-fast delivery times with our optimized logistics network, ensuring your purchases arrive when you need them."}
              {index === 2 &&
                "Discover our exclusive collection, featuring unique and limited-edition items that set you apart from the crowd."}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="h-full flex items-center w-1/3 overflow-hidden">
        {images.map(
          (image, index) =>
            index === vectorNo && (
              <motion.img
                key={image}
                initial={{ opacity: 0, y: 50, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 0.75 }}
                exit={{ opacity: 0, y: 50, scale: 0.85 }}
                transition={{ duration: 0.75 }}
                src={`vectors/${image}`}
                alt="vector"
                className="object-cover bg-center h-[80%] w-auto relative z-10 rounded-lg shadow-lg"
              />
            )
        )}
      </motion.div>
    </motion.section>
  );
}

export default Explore;
