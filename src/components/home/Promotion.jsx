import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { PulseLoader } from "react-spinners";

function Promotion() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      if (data && data.length) setProducts(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setErrMsg(error.message);
      setLoading(false);
      throw new Error(error);
    }
  };
  const discount = 0.35;
  return (
    <section
      className="
      relative
      flex flex-col justify-center items-center
      min-h-[50vh] my-6
      mx-auto
      shadow-2xl
      "
    >
      {loading ? (
        <div className="text-center">
          <PulseLoader />
          <span className="text-heading-md">Loading...</span>
        </div>
      ) : errMsg ? (
        <span className="text-heading-md">Error Fetching Data: {errMsg}</span>
      ) : (
        <>
          <h1
            className="
            relative text-light-flash mix-blend-difference
            text-heading-xl font-Josefin border-b border-t
          border-[#e1e1e1] w-1/2 text-center"
          >
            Best Deals
          </h1>
          <motion.div
            initial={{ x: -200, opacity: 0.25 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="
          grid grid-flow-col grid-rows-2 sm:grid-rows-1 gap-2
          overflow-x-auto
          w-full h-full
          p-2
         "
          >
            {products.map(
              (item, index) =>
                index < 20 &&
                index > 10 && (
                  <div
                    className="
                relative
                flex flex-col justify-between gap-2
                w-[200px]
                p-2
                bg-light-flash dark:bg-dark-smoke
                rounded-xl shadow-xl border dark:border-gray-600
                "
                  >
                    <img
                      src={item.images[0]}
                      key={item.id}
                      alt="promo image"
                      className="rounded-xl"
                    />
                    <span className="text-lg">{item.title}</span>
                    <div className="flex flex-col gap-1">
                      <span className="opacity-70 line-through">
                        ${item.price}
                      </span>
                      <span>
                        ${(item.price - item.price * discount).toFixed(2)}
                      </span>
                    </div>
                    <span
                      className="
                    absolute p-1
                    text-body-text font-Josefin font-bold
                  bg-red-600"
                    >
                      %{discount * 100} Off
                    </span>
                    <button
                      className="
                  p-[0.5em_2em]
                  mx-auto
                  text-body-text text-white
                  rounded-xl shadow-lg bg-blue-700"
                    >
                      Details
                    </button>
                  </div>
                )
            )}
          </motion.div>
        </>
      )}
    </section>
  );
}

export default Promotion;
