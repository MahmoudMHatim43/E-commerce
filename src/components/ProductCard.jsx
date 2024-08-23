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
      className="flex flex-col items-center justify-between gap-4
      w-[300px] p-4
     bg-black text-white
      rounded-2xl shadow-xl"
    >
      <img
        src={product.images[1]}
        alt="product image"
        className="object-cover w-[95%] max-h-[300px] rounded-xl"
      />
      <div className="flex flex-col self-start">
        <span className="text-card-title">{product.title}</span>
        <span className="text-small-text">{desc}</span>
      </div>
      <span className="self-start text-small-text border border-white p-2 rounded-xl">
        {product.category.name}
      </span>
      <div className="flex flex-row-reverse w-full justify-between">
        <button
          className="
        p-[0.25em_1.5em]
        text-body-text bg-blue_l
        rounded-xl"
        >
          Add To Cart+
        </button>
        <span className="text-heading-md">${product.price}</span>
      </div>
    </motion.div>
  );
}

export default ProductCard;
