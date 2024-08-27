import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-8 text-light-t1 dark:text-dark-t1">
        Your Cart
      </h1>

      {/* Cart items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.items.length > 0 ? (
          cart.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white dark:bg-dark-main rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <h2 className="text-lg font-semibold mb-2 text-light-t1 dark:text-dark-t1">
                  {item.title}
                </h2>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold text-light-t1 dark:text-dark-t1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xl font-bold text-light-t1 dark:text-dark-t1">
                    ${item.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-light-t2 dark:text-dark-t2 col-span-full">
            Your cart is empty.
          </p>
        )}
      </div>

      {/* Cart totals */}
      {cart.items.length > 0 && (
        <div className="mt-8 p-4 bg-white dark:bg-dark-main rounded-lg shadow-lg flex justify-between items-center">
          <span className="text-xl font-semibold text-light-t1 dark:text-dark-t1">
            Total ({cart.totalQuantity} items):
          </span>
          <span className="text-xl font-bold text-light-t1 dark:text-dark-t1">
            ${cart.totalCost.toFixed(2)}
          </span>
        </div>
      )}

      {/* Checkout button */}
      <div className="flex justify-end mt-6">
        <button
          className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
          disabled={cart.totalQuantity === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
