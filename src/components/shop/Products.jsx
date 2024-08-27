import ProductCard from "../ProductCard";
import { PulseLoader } from "react-spinners";
import { useSelector } from "react-redux";

function Products() {
  const { products, isPending, error, selectedCategory } = useSelector(
    (state) => state.products
  );

  return (
    <div
      className="
    col-span-12 sm:col-span-9
    w-[95%] mx-auto max-h-[75svh] overflow-y-auto
  bg-light-main dark:bg-dark-main
    rounded-lg shadow-lg"
    >
      <h2 className="text-heading-xl text-light-t1 dark:text-dark-t1 font-Nuntio font-bold mb-4">
        {selectedCategory}
      </h2>
      {isPending ? (
        <div className="flex justify-center items-center">
          <PulseLoader />
          <span className="ml-4 text-light-t2 dark:text-dark-t2">
            Loading...
          </span>
        </div>
      ) : error ? (
        <span className="text-light-t2 dark:text-dark-t2">{error}</span>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(
            (product) =>
              product.category.name === selectedCategory && (
                <ProductCard product={product} key={product.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
