import { useState } from "react";
import { motion } from "framer-motion";

function ToggleButton({ onToggle, theme }) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <>
      <div
        onClick={toggleSwitch}
        className={`
        flex items-center absolute top-4 right-6 z-10
        w-16 h-8
        p-1
        bg-gray-300 dark:bg-gray-600
        rounded-full cursor-pointer
        ${isOn ? "justify-end" : "justify-start"}`}
      >
        <motion.div
          className="w-6 h-6 bg-white dark:bg-black rounded-full shadow-md"
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />
      </div>
      <span className="absolute top-14 right-4 z-10 text-light-flash">
        {theme}
      </span>
    </>
  );
}

export default ToggleButton;
