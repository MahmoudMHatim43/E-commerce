// React:
import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaShoppingCart, FaShoppingBag } from "react-icons/fa";

const pages = [
  {
    name: "Home",
    icon: <FaHome />,
  },
  {
    name: "Shop",
    icon: <FaShoppingCart />,
  },
  {
    name: "Cart",
    icon: <FaShoppingBag />,
  },
  { name: "Login", icon: <FaUser /> },
];
const listVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.5, duration: 1 },
  }),
};
function Navbar() {
  const [active, setActive] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    let curr = location.pathname;
    curr === "/" ? setActive("home") : setActive(curr.substring(1));
  }, [location]);

  return (
    <nav className="flex fixed inset-x-0 bottom-0 z-50 sm:static items-center justify-between h-[10svh] p-2 bg-black text-neutral-200 overflow-hidden">
      <NavLink
        to="/"
        className="hidden sm:flex w-1/3 items-center overflow-hidden">
        <img src="logo.png" alt="company logo" className="object-cover w-16" />
        <span
          className="
          w-full
          text-logo-name font-Caveat font-bold">
          React Store
        </span>
      </NavLink>
      <ul className="flex justify-around w-full sm:w-2/3 text-body-text">
        {pages.map((page, idx) => (
          <NavLink
            key={idx}
            to={page.name === "Home" ? "/" : `/${page.name.toLowerCase()}`}
            className={`nav-item p-2 ${
              active === page.name.toLowerCase() &&
              "text-orange-cstm duration-500"
            }`}>
            <motion.li
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={listVariants}>
              <span className="hidden sm:block">{page.name}</span>
              <span className="block sm:hidden text-2xl">{page.icon}</span>
            </motion.li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
