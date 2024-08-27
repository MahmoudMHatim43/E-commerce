import React from "react";

function PromoCard({ product, discount }) {
  return (
    <>
      <div className="relative flex flex-col gap-4 w-[250px] p-4 bg-blue-100 dark:bg-zinc-800 font-Nuntio rounded-2xl hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
          src={product.images[0]}
          alt="promo image"
          className="rounded-xl shadow-xl"
        />
        <span className="text-lg font-bold">{product.title}</span>
        <div className="flex flex-col gap-1">
          <span className="text-md line-through tracking-wide">
            ${product.price}
          </span>
          <span className="text-md font-bold tracking-wide">
            ${(product.price - product.price * discount).toFixed(2)}
          </span>
        </div>
        <span className="absolute top-2 left-2 p-2 bg-red-600 text-white text-sm font-bold rounded">
          %{(discount * 100).toFixed(0)} Off
        </span>
        <button className="mt-auto p-2 bg-blue-700 text-white hover:bg-blue-500 transition rounded-lg shadow-md">
          Details
        </button>
      </div>
    </>
  );
}

export default PromoCard;
