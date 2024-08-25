import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import { PulseLoader } from "react-spinners";
import ProductCard from "../ProductCard";
function Trending() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
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
  return (
    <motion.section
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: isInView ? 0 : -200, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:w-[95svw] items-center gap-4
      mx-auto mt-[5svh] p-2"
    >
      <h1 className="text-heading-xl text-light_t1 dark:text-dark_t1 font-Nuntio font-bold">
        Trending
      </h1>
      <div className="grid grid-flow-col grid-rows-1 lg:grid-rows-2 gap-2 lg:gap-3 overflow-x-scroll w-full">
        {loading ? (
          <PulseLoader />
        ) : errMsg ? (
          <span>{errMsg}</span>
        ) : (
          products
            .filter((product) => product.id > 20 && product.id < 30)
            .map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })
        )}
      </div>
    </motion.section>
  );
}

export default Trending;
