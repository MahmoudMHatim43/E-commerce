import React from "react";
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

function SideBar() {
  return (
    <div className="col-span-12 sm:col-span-3 border min-h-full p-4 bg-light-second dark:bg-dark-second rounded-lg shadow-md">
      <ul className="flex sm:flex-col gap-4 sm:gap-6">
        {categories.map((category) => (
          <li
            key={category.name}
            className="flex items-center gap-2 text-light-t1 dark:text-dark-t1 cursor-pointer hover:text-blue-600 transition"
          >
            <span className="text-xl">{category.icon}</span>
            <span className="hidden sm:inline-block">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
