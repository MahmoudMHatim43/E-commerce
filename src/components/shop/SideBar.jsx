import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchProducts,
  setSelectedCategory,
} from "../../store/slices/products";
import { FaTshirt, FaShoePrints, FaBoxes } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { GiSofa } from "react-icons/gi";

const icons = {
  Clothes: <FaTshirt />,
  Electronics: <MdDevices />,
  Furniture: <GiSofa />,
  Shoes: <FaShoePrints />,
  Miscellaneous: <FaBoxes />,
};

function SideBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { categories, selectedCategory } = useSelector(
    (state) => state.products
  );

  return (
    <div className="p-4 bg-white dark:bg-dark-second rounded-lg shadow-lg">
      <ul className="flex flex-col space-y-4">
        {categories.map((category, idx) => (
          <motion.li
            key={idx}
            onClick={() => dispatch(setSelectedCategory(category))}
            whileHover={{ scale: 1.05, x: 10 }}
            className={`
              flex items-center gap-3 cursor-pointer
              p-3 rounded-lg
              transition duration-300
              ${
                selectedCategory === category
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            `}>
            <span className="text-2xl">{icons[category]}</span>
            <span>{category}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
