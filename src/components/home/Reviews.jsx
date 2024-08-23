import React from "react";
import { motion } from "framer-motion";
function Reviews() {
  return (
    <motion.section className="mt-[5vh] relative">
      <div className="flex flex-col items-center text-center gap-6 w-[80svw] md:w-[60svw] mx-auto my-5 p-4 border border-orange_c bg-[#000000dd] text-white rounded-3xl shadow shadow-indigo-700">
        <img
          src="user1.png"
          alt="user image"
          className="w-[100px] rounded-full"
        />
        <hr className="w-3/4 opacity-50" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          praesentium perspiciatis ducimus mollitia, amet tenetur et esse modi
          quisquam tempora.
        </p>
        <span>- John Doe</span>
      </div>
    </motion.section>
  );
}

export default Reviews;
