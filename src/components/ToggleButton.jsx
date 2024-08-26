import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  const [mode, setMode] = useState("Dark Mode");
  useEffect(() => {
    handleTheme();
  }, [isOn]);
  function toggleSwitch() {
    setIsOn(!isOn);
  }
  function handleTheme() {
    document.documentElement.classList.toggle("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");
    return isDarkMode ? setMode("Dark Mode") : setMode("Light Mode");
  }
  return (
    <>
      <div
        onClick={toggleSwitch}
        className={`
        flex items-center absolute top-4 right-6 z-50
        w-16
        p-1
        bg-light-main dark:bg-dark-main
        rounded-full cursor-pointer
        ${isOn ? "justify-end" : "justify-start"}`}
      >
        <motion.div
          className="w-6 h-6 bg-dark-main dark:bg-light-main rounded-full shadow-md"
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />
      </div>
      <span className="absolute top-12 right-4 z-50">{mode}</span>
    </>
  );
}

export default ToggleButton;
