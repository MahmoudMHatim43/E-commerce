import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { PulseLoader } from "react-spinners";

function Products() {
  const { products, isPending, error, selectedCategory } = useSelector(
    (state) => state.products
  );

  return (
    <div className="p-4 bg-white dark:bg-dark-main rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        {selectedCategory}
      </h2>
      {isPending ? (
        <div className="flex justify-center items-center">
          <PulseLoader color="#4A90E2" />
          <span className="ml-4 text-gray-600 dark:text-gray-400">
            Loading...
          </span>
        </div>
      ) : error ? (
        <span className="text-gray-600 dark:text-gray-400">{error}</span>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products
            .filter((product) => product.category.name === selectedCategory)
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Products;
