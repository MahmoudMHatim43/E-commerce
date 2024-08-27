import { useEffect } from "react";
import { motion } from "framer-motion";
import { PulseLoader } from "react-spinners";
import { fetchProducts } from "../../store/slices/products";
import { useDispatch, useSelector } from "react-redux";

function Promotion() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { products, isPending, error } = useSelector((state) => state.products);
  const discount = 0.35;
  return (
    <section
      className="
        relative flex flex-col justify-center items-center
        min-h-[50vh] md:my-32 mx-auto
        p-6 bg-light-main dark:bg-dark-second rounded-lg shadow-2xl
      "
    >
      {isPending ? (
        <div className="text-center">
          <PulseLoader />
          <span className="block text-heading-md mt-4 text-light-t2 dark:text-dark-t2">
            Loading...
          </span>
        </div>
      ) : error ? (
        <span className="text-heading-md text-red-500">
          Error Fetching Data: {error}
        </span>
      ) : (
        <>
          <h1
            className="
              relative text-heading-xl font-Josefin text-center
              text-light-t1 dark:text-dark-t1
              border-b border-t border-gray-300 dark:border-gray-600
              w-full py-4 mb-6
            "
          >
            Best Deals
          </h1>
          <motion.div
            initial={{ x: -200, opacity: 0.25 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="
              grid grid-flow-col grid-rows-1 sm:grid-rows-1 gap-4
              overflow-x-auto
              w-full h-full p-4
            "
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="
                    relative flex flex-col justify-between gap-4
                    w-[200px] p-4
                    bg-light-main dark:bg-dark-main
                    rounded-lg shadow-lg border border-gray-200 dark:border-gray-600
                    hover:shadow-2xl transition-shadow duration-200 ease-in-out
                  "
              >
                <img
                  src={item.images[0]}
                  alt="promo image"
                  className="rounded-lg"
                />
                <span className="text-lg font-semibold text-light-t1 dark:text-dark-t1">
                  {item.title}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-light-t2 dark:text-dark-t2 line-through">
                    ${item.price}
                  </span>
                  <span className="text-lg font-bold text-light-t1 dark:text-dark-t1">
                    ${(item.price - item.price * discount).toFixed(2)}
                  </span>
                </div>
                <span
                  className="
                      absolute top-2 left-2 p-1
                      bg-red-600 text-white text-sm font-bold rounded
                    "
                >
                  %{(discount * 100).toFixed(0)} Off
                </span>
                <button
                  className="
                      mt-auto p-2 bg-blue-700 text-white
                      rounded-lg shadow-md hover:bg-blue-600 transition
                    "
                >
                  Details
                </button>
              </div>
            ))}
          </motion.div>
        </>
      )}
    </section>
  );
}

export default Promotion;
