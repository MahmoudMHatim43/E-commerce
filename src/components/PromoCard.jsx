import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function PromoCard({ product, discount }) {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        className="relative flex flex-col gap-4 w-[250px] p-4
         dark:bg-zinc-800 font-Nuntio border dark:border-none
         rounded-2xl shadow-[0_0_10px_0_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer">
        <NavLink to={`/products/${product.id}`}>
          <img
            src={product.images[0] || "image-not-found.png"}
            alt="promo image"
            className="rounded-xl shadow-xl"
          />
          <span className="text-lg font-bold">{product.title}</span>
          <div className="flex flex-col gap-1">
            <span className="text-md line-through tracking-wide">
              ${product.price}
            </span>
            <span className="text-md font-bold tracking-wide">
              ${(product.price - product.price * discount).toFixed(2)}
            </span>
          </div>
        </NavLink>
        <span className="absolute top-2 left-2 p-2 bg-red-600 text-white text-sm font-bold rounded">
          %{(discount * 100).toFixed(0)} Off
        </span>
        <button className="mt-auto p-2 bg-zinc-800 dark:bg-zinc-950 text-white hover:bg-blue-500 transition-colors duration-300 rounded-lg shadow-md">
          Details
        </button>
      </motion.div>
    </>
  );
}

export default PromoCard;
