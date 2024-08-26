import React from "react";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const MAX_LENGTH = 40;
  let desc;
  if (product.description.length > MAX_LENGTH) {
    desc = product.description.slice(0, MAX_LENGTH) + " ...Read More";
  } else {
    desc = product.description;
  }
  return (
    <motion.div
      className="
      flex flex-col items-center justify-between gap-2
      w-[250px] lg:w-[300px] p-4
     bg-light-second border dark:bg-dark-main border-gray-500
      rounded-2xl shadow-2xl font-Nuntio"
    >
      <img
        src={product.images[0]}
        alt="product image"
        className="object-cover w-[95%] max-h-[300px] rounded-xl"
      />
      <div className="flex flex-col self-start">
        <span
          className="
          text-lg
          font-bold"
        >
          {product.title}
        </span>
        <span className="text-small-text">{desc}</span>
      </div>
      <span className="self-end text-small-text border border-gray-400 py-1 px-2 bg-blue-100 dark:text-light-t1 rounded-xl">
        {product.category.name}
      </span>
      <div className="flex flex-row-reverse w-full justify-between">
        <button
          className="
        p-[0.25em_1.5em]
        text-body-text bg-blue-700 text-white
        rounded-xl shadow-xl"
        >
          + Add To Cart
        </button>
        <span className="text-body-text">${product.price}</span>
      </div>
    </motion.div>
  );
}

export default ProductCard;
