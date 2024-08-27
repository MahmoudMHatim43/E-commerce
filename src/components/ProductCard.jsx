import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

function ProductCard({ product }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const MAX_LENGTH = 40;
  const desc =
    product.description.length > MAX_LENGTH
      ? product.description.slice(0, MAX_LENGTH) + " ...Read More"
      : product.description;
  return (
    <motion.div className="flex flex-col items-center p-4 min-h-full rounded-xl border dark:border-gray-600">
      <img
        src={product.images[0] || "image-not-available.png"}
        alt="product image"
        className="object-cover rounded-lg"
      />
      <span className="w-full p-1 text-md font-bold">{product.title}</span>
      <span className="hidden lg:block w-full p-1 text-sm">{desc}</span>
      <div className="flex flex-col-reverse w-full gap-2 justify-between mt-auto p-1">
        {items.map((item) => item.id).includes(product.id) ? (
          <div className="flex gap-2 w-full items-center justify-between">
            <div className="flex gap-2 w-full">
              <button
                onClick={() => dispatch(addToCart(product))}
                className="flex-1 p-2 bg-blue-400 text-black rounded-md">
                Add+
              </button>
              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                className="flex-1 p-2 bg-red-400 text-black rounded-md">
                Remove
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="p-2 bg-zinc-800 dark:bg-slate-300 dark:text-black rounded-md">
            Add To Cart
          </button>
        )}
        <div className="flex justify-between">
          <span className="text-xl font-bold font-Josefin">
            ${product.price}
          </span>
          <span className="text-xl text-center">
            {items.find((item) => item.id === product.id)?.quantity || null}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
