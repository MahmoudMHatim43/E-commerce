import React, { useEffect, useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import ProductCard from "../ProductCard";

function Products({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      getProducts();
    }
  }, [selectedCategory]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/?categoryId=${selectedCategory}`
      );
      if (data && data.length) setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setErrMsg(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="col-span-12 sm:col-span-9 p-4 bg-light-main dark:bg-dark-main rounded-lg shadow-lg">
      <h2 className="text-heading-xl text-light-t1 dark:text-dark-t1 font-Nuntio font-bold mb-4">
        Products
      </h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <PulseLoader />
          <span className="ml-4 text-light-t2 dark:text-dark-t2">
            Loading...
          </span>
        </div>
      ) : errMsg ? (
        <span className="text-light-t2 dark:text-dark-t2">{errMsg}</span>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
