import { useEffect } from "react";
import { motion } from "framer-motion";
import { fetchProducts } from "../../store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import PromoCard from "../PromoCard";
import PromoSkeleton from "../PromoSkeleton";

function Promotion() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, isPending, error } = useSelector((state) => state.products);
  const discount = 0.35;

  const skeletonArray = Array(8).fill(0);

  return (
    <section className="relative flex flex-col justify-center items-center p-6">
      {isPending ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-flow-col gap-x-4 w-full p-4 overflow-x-scroll">
          {skeletonArray.map((_, idx) => (
            <PromoSkeleton key={idx} />
          ))}
        </motion.div>
      ) : error ? (
        <span className="text-2xl">Error Fetching Data</span>
      ) : (
        <>
          <h1 className="text-heading-section font-Nuntio text-center w-full overflow-hidden">
            Best Deals
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-flow-col gap-x-4 w-full p-4 overflow-x-scroll">
            {products.map(
              (product, index) =>
                index < 15 &&
                index > 5 && (
                  <PromoCard
                    product={product}
                    key={index}
                    discount={discount}
                  />
                )
            )}
          </motion.div>
        </>
      )}
    </section>
  );
}

export default Promotion;
