import React from "react";

function Cart() {
  return (
    <div className="col-span-12 p-6 bg-light-second dark:bg-dark-second rounded-lg shadow-lg min-h-[100svh]">
      <h1 className="text-heading-xl text-light-t1 dark:text-dark-t1 font-Nuntio font-bold mb-6">
        Your Cart
      </h1>

      {/* Placeholder for cart items */}
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex justify-between items-center p-4 bg-white dark:bg-dark-main rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div>
              <h2 className="text-lg text-light-t1 dark:text-dark-t1 font-semibold">
                Product Name
              </h2>
              <p className="text-sm text-light-t2 dark:text-dark-t2">
                Product Description
              </p>
            </div>
          </div>
          <div className="text-lg text-light-t1 dark:text-dark-t1">$Price</div>
        </div>

        <div className="flex justify-between items-center p-4 bg-white dark:bg-dark-main rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div>
              <h2 className="text-lg text-light-t1 dark:text-dark-t1 font-semibold">
                Product Name
              </h2>
              <p className="text-sm text-light-t2 dark:text-dark-t2">
                Product Description
              </p>
            </div>
          </div>
          <div className="text-lg text-light-t1 dark:text-dark-t1">$Price</div>
        </div>

        {/* Add more placeholders as needed */}
      </div>

      {/* Placeholder for cart totals */}
      <div className="flex justify-between items-center p-4 bg-white dark:bg-dark-main rounded-lg shadow-md mb-6">
        <span className="text-lg text-light-t1 dark:text-dark-t1 font-semibold">
          Total:
        </span>
        <span className="text-lg text-light-t1 dark:text-dark-t1">
          $Total Price
        </span>
      </div>

      {/* Placeholder for checkout button */}
      <div className="flex justify-end">
        <button className="p-4 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
