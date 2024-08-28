import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-8 text-light-t1 dark:text-dark-t1">
        Shopping Cart
      </h1>

      <div className="flex flex-col gap-6">
        {cart.items.length > 0 ? (
          cart.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full sm:w-24 h-24 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
              />
              <div className="flex-1 p-4">
                <h2 className="text-lg font-semibold text-light-t1 dark:text-dark-t1">
                  {item.title}
                </h2>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="p-2 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-full hover:from-gray-500 hover:to-gray-600 transition duration-300 shadow-lg">
                      -
                    </motion.button>
                    <span className="text-lg font-semibold text-light-t1 dark:text-dark-t1">
                      {item.quantity}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => dispatch(addToCart(item))}
                      className="p-2 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-full hover:from-gray-500 hover:to-gray-600 transition duration-300 shadow-lg">
                      +
                    </motion.button>
                  </div>
                  <span className="text-xl font-bold text-light-t1 dark:text-dark-t1">
                    ${item.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => dispatch(removeFromCart(item.id, item.quantity))}
                className="p-2 w-10 h-10 flex items-center justify-center bg-gray-700 dark:bg-gray-800 text-white rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-gray-600 transition duration-300 shadow-lg">
                <FaTrash />
              </motion.button>
            </div>
          ))
        ) : (
          <p className="text-center text-light-t2 dark:text-dark-t2">
            Your cart is empty.
          </p>
        )}
      </div>

      {cart.items.length > 0 && (
        <div className="mt-8 p-4 bg-white dark:bg-black rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
          <span className="text-xl font-semibold text-light-t1 dark:text-dark-t1">
            Total ({cart.totalQuantity} items):
          </span>
          <span className="text-2xl font-bold text-light-t1 dark:text-dark-t1 mt-4 md:mt-0">
            ${cart.totalCost.toFixed(2)}
          </span>
        </div>
      )}

      <div className="flex justify-end mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300"
          disabled={cart.totalQuantity === 0}>
          Proceed to Checkout
        </motion.button>
      </div>
    </div>
  );
}

export default Cart;
