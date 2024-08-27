import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";
function ProductCard({ product }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
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
      p-4
    bg-light-second border dark:bg-dark-main border-gray-500
      rounded-2xl shadow-2xl font-Josefin"
    >
      <img
        src={product.images[0]}
        alt="product image"
        className="object-cover w-[95%] rounded-xl"
      />
      <div className="flex flex-col self-start">
        <span
          className="
          text-lg
          font-bold"
        >
          {product.title}
        </span>
        <span className="hidden lg:inline-block text-sm">{desc}</span>
      </div>
      <div className="flex flex-col-reverse w-full gap-2 justify-between">
        {items.map((item) => item.id).includes(product.id) ? (
          <div className="flex gap-2 w-full items-center justify-around">
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(addToCart(product))}
                className="p-[0.25em_1.5em] bg-blue-700 rounded-xl shadow"
              >
                Add
              </button>
              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                className="p-[0.25em_1.5em] bg-red-700 rounded-xl shadow"
              >
                Remove
              </button>
            </div>
            <span
              className="
               w-6 
               text-center bg-gray-600
               rounded-full"
            >
              {items.map((item) => item.id === product.id && item.quantity)}
            </span>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="
            p-[0.25em_1.5em]
            text-body-text bg-blue-700 text-white
            rounded-xl shadow-xl"
          >
            Add To Cart
          </button>
        )}
        <span className="text-body-text font-bold">${product.price}</span>
      </div>
    </motion.div>
  );
}

export default ProductCard;
