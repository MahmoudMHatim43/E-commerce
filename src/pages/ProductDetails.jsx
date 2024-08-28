import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === parseInt(productId));
  const cartItem = cart.items.find((item) => item.id === product.id);
  const [currentImage, setCurrentImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
      <button
        onClick={() => navigate(-1)}
        className="md:col-span-12 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition mb-4">
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="md:col-span-2 flex md:flex-col gap-4">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImage(index)}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
              currentImage === index ? "ring-2 ring-purple-500" : "opacity-75"
            } hover:opacity-100 transition`}
          />
        ))}
      </div>

      <div className="md:col-span-7 flex items-center justify-center">
        <img
          src={product.images[currentImage]}
          alt={product.title}
          className="w-full max-w-[600px] h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="md:col-span-3 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {product.title}
          </h1>
          <span className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-1 px-3 rounded-full text-sm mb-4 inline-block">
            {product.category.name}
          </span>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {product.description}
          </p>
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`mt-6 p-4 rounded-lg shadow-lg transition ${
            isAdded
              ? "bg-green-600 text-white"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}>
          {isAdded ? (
            <div className="flex items-center justify-center">
              <FaCheck className="mr-2" />
              Added!
            </div>
          ) : (
            `Add To Cart (${cartItem ? cartItem.quantity : 0})`
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
