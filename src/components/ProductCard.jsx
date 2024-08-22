import React, { useState } from "react";

function ProductCard({ product }) {
  const [isLong, setIsLong] = useState(false);
  const MAX_LENGTH = 40;
  let desc;
  if (product.description.length > MAX_LENGTH) {
    desc = product.description.slice(0, MAX_LENGTH) + " ...Read More";
  } else {
    desc = product.description;
  }
  return (
    <div
      className="flex flex-col items-center justify-between
      p-4
      h-[500px] w-[350px]
     bg-black text-white
      rounded-2xl"
    >
      <img
        src={product.images[0]}
        alt="product image"
        className="object-cover w-[95%] h-[250px] rounded-xl"
      />
      <div>
        <span className="text-card-title">{product.title}</span>
        <span className="text-small-text">{desc}</span>
      </div>
      <span>{product.category.name}</span>
      <div className="flex w-full justify-between">
        <button
          className="
        p-[0.25em_1.5em]
        text-body-text bg-blue_l
        rounded-xl"
        >
          Add To Cart+
        </button>
        <span className="text-body-text">${product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
