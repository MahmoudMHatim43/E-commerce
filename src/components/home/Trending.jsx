import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PulseLoader } from "react-spinners";
import { fetchProducts } from "../../store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";
function Trending() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const dispatch = useDispatch();
  const { products, isPending, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <motion.section
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: isInView ? 0 : -200, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        flex flex-col lg:w-[95svw] items-center gap-4
        mx-auto mt-[5svh] p-4
        bg-light-second dark:bg-dark-second rounded-lg shadow-lg
      "
    >
      <h1 className="text-heading-xl text-light-t1 dark:text-dark-t1 font-Nuntio font-bold">
        Trending
      </h1>
      <div className="grid grid-flow-col grid-rows-1 lg:grid-rows-2 gap-2 lg:gap-4 overflow-x-scroll w-full">
        {isPending ? (
          <PulseLoader />
        ) : error ? (
          <span className="text-light-t2 dark:text-dark-t2">{error}</span>
        ) : (
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        )}
      </div>
    </motion.section>
  );
}

export default Trending;
