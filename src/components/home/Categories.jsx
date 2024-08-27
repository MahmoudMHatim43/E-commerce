import { motion } from "framer-motion";
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

function Categories() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full sm:w-[90svw] mx-auto p-4 text-body-text">
      <h1 className="text-heading-section font-Nuntio font-bold">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-4 w-full">
        {categories.map((category, idx) => (
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            key={idx}
            className="flex flex-col justify-center items-center p-2
            text-xl text-dark_t1 bg-gray_l2 dark:bg-gray_d1
            rounded-xl opacity-[0.8] cursor-pointer border border-gray-300">
            <span>{category.icon}</span>
            <span className="text-body-text text-center">{category.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Categories;
