import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaTv,
  FaTshirt,
  FaCouch,
  FaBook,
  FaGamepad,
  FaHeartbeat,
  FaDumbbell,
  FaCar,
  FaGem,
  FaMedkit,
} from "react-icons/fa";

function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const categories = [
    { name: "Electronics", icon: <FaTv /> },
    { name: "Clothing", icon: <FaTshirt /> },
    { name: "Home & Kitchen", icon: <FaCouch /> },
    { name: "Books", icon: <FaBook /> },
    { name: "Toys & Games", icon: <FaGamepad /> },
    { name: "Beauty & Personal Care", icon: <FaHeartbeat /> },
    { name: "Sports & Outdoors", icon: <FaDumbbell /> },
    { name: "Automotive", icon: <FaCar /> },
    { name: "Jewelry & Accessories", icon: <FaGem /> },
    { name: "Health & Wellness", icon: <FaMedkit /> },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: isInView ? 0 : 200, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center
      mx-auto my-5 p-4
      sm:w-[90svw]
      text-body-text text-light_t1 dark:text-dark_t1
      rounded-2xl shadow-lg">
      <h1 className="text-heading-xl font-Nuntio font-bold">Catagories</h1>
      <div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4
        p-4">
        {categories.map((catagory, idx) => (
          <motion.div
            whileHover={{ scale: 1.02, opacity: 1 }}
            whileTap={{ scale: 1 }}
            key={idx}
            className="flex flex-col justify-center items-center
            p-2
            text-xl text-dark_t1 bg-gray_l2 dark:bg-gray_d1
            rounded-xl shadow-xl opacity-[0.6] cursor-pointer border border-gray-500">
            <span>{catagory.icon}</span>
            <span className="text-body-text text-center">{catagory.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Categories;
