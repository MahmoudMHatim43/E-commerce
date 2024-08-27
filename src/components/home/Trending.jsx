import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import PromoSkeleton from "../PromoSkeleton";

function Trending() {
  const { products, isPending, error } = useSelector((state) => state.products);
  const skeletonArray = Array(8).fill(0);
  return (
    <motion.section className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-heading-section font-Nuntio font-bold overflow-hidden">
        Trending
      </h1>
      <div className="grid grid-flow-col gap-x-4 w-full p-6 overflow-x-scroll">
        {isPending ? (
          skeletonArray.map((_, idx) => <PromoSkeleton key={idx} />)
        ) : error ? (
          <span className="text-light-error dark:text-dark-error">{error}</span>
        ) : (
          products.map(
            (product) =>
              product.id < 20 && (
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                  key={product.id}
                  className="min-w-[250px]">
                  <ProductCard product={product} />
                </motion.div>
              )
          )
        )}
      </div>
    </motion.section>
  );
}

export default Trending;
