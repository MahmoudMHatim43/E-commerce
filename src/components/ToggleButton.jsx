import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/theme";

function ToggleButton() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(toggleTheme())}
        className={`
        flex items-center absolute top-4 right-6 z-50
        w-16
        p-1
        bg-light-main dark:bg-dark-main
        rounded-full cursor-pointer
        ${isDark ? "justify-end" : "justify-start"}`}
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
      <span className="absolute top-12 right-4 z-50">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </>
  );
}

export default ToggleButton;
