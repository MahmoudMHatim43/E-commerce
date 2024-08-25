import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Explore() {
  const [nom, setNom] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  function handleNom(id) {
    setNom(id);
  }
  const headings = ["Heading 1", "Heading 2", "Heading 3"];
  const images = ["v-1.png", "v-2.png", "v-3.png"];
  return (
    <motion.section
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: isInView ? 0 : -200, opacity: 1 }}
      className="
      relative
      hidden md:flex justify-center gap-10
      h-[50svh]
      mb-20
      overflow-visible"
    >
      <div class="expolre-svg">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <motion.div
        className="
        relative -bottom-12 z-10
        flex-2 flex flex-col items-center justify-end
        min-h-full w-1/2"
      >
        {headings.map((heading, index) => (
          <motion.div
            initial={{ opacity: 0.8 }}
            onHoverStart={() => handleNom(index)}
            whileHover={{ opacity: 1, scale: 1.02 }}
            className="
            font-Nuntio bg-black p-6 m-2 rounded-2xl shadow-2xl text-white max-w-[600px] overflow-hidden
            border"
          >
            <h2 className="font-bold text-lg text-dark-t1">{heading}</h2>
            <p className="text-dark-t2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolor fuga, dolor sit amet consectetur adipisicing elit.
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="h-full flex items-center w-1/2 overflow-hidden">
        {images.map(
          (image, index) =>
            index === nom && (
              <motion.img
                initial={{ opacity: 0, x: 50, y: -15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.75 }}
                src={`vectors/${image}`}
                alt="vector"
                className="object-cover h-full relative z-10"
              />
            )
        )}
      </motion.div>
    </motion.section>
  );
}

export default Explore;
