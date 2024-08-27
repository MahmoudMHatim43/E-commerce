import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaSpotify,
  FaAirbnb,
  FaAmazon,
  FaShopify,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Wave from "../seperate/Wave";
const icons = [
  <FaFacebook />,
  <FaSpotify />,
  <FaAirbnb />,
  <FaAmazon />,
  <FaShopify />,
  <FaXTwitter />,
];
const users = [
  {
    image: "user1.png",
    name: "John Doe",
    comment: `I'm so impressed with this product! The ease of use, the quality of the products, and the customer service are all top-notch. I've already recommended it to all my friends and family and I'm excited to see what the future holds for this company.`,
  },
  {
    image: "user2.png",
    name: "Jhonson Doe",
    comment: `I was blown away by the quality of this product. The attention to detail, the ease of use, and the customer service are all exceptional. I've already recommended it to all my friends and family and I'm excited to see what the future holds for this company.`,
  },
  {
    image: "user3.png",
    name: "Karen Doe",
    comment: `I've been using this product for a while and I have to say, it's been a life-changer for me. The ease of use, the quality of the products, and the customer service are all top-notch. I've already recommended it to all my friends and family and I'm excited to see what the future holds for this company.`,
  },
];

function Reviews() {
  const [userId, setUserId] = React.useState(0);
  function changeComment(index) {
    index === users.length - 1 ? setUserId(0) : setUserId(index + 1);
  }
  return (
    <motion.section className="relative min-h-[100svh] mt-5">
      <div className="flex flex-col items-center gap-2 text-center w-full">
        <span className="text-heading-lg text-light-t1 dark:text-dark-t1">
          Trusted by top Brands and over{" "}
          <span className="text-orange-cstm border-b">+1,000</span> partners
        </span>
        <p className="text-body-text text-light-t2 dark:text-dark-t2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          animi placeat sit sequi culpa possimus, beatae tempore sunt.
        </p>
      </div>
      <div
        className="
       flex justify-evenly
       lg:w-[80svw] mx-auto
       p-6
       text-heading-xl">
        {icons.map((icon) => icon)}
      </div>
      {/*  */}
      <div className="flex justify-around items-center w-[90svw] mx-auto">
        <FaArrowLeft
          className="
        text-6xl hidden text-orange-cstm
        sm:block"
        />
        {users.map(
          (user, idx) =>
            idx === userId && (
              <motion.div
                initial={{ x: userId === idx ? 1000 : 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => changeComment(idx)}
                className="
              relative z-10
              flex flex-col items-center gap-6
              w-[80svw] md:w-[60svw] 
              mx-auto my-5 p-4 
              border border-orange-cstm bg-light-second dark:bg-dark-second text-center text-light-t1 dark:text-dark-t1 rounded-xl shadow-sm shadow-purple-500">
                <img
                  src={user.image}
                  alt="user image"
                  className="
                object-cover
                w-[100px] h-[100px] 
                rounded-full shadow-xl
                "
                />
                <hr className="w-3/4 opacity-50" />
                <p>{user.comment}</p>
                <span>- {user.name}</span>
              </motion.div>
            )
        )}
        <FaArrowRight
          className="
        text-6xl hidden text-orange-cstm
        sm:block"
        />
      </div>
      <Wave />
    </motion.section>
  );
}

export default Reviews;
