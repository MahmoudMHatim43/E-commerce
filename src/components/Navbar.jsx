// React:
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaShoppingCart, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("");
  const location = useLocation();
  useEffect(() => {
    let curr = location.pathname;
    curr === "/" ? setActive("home") : setActive(curr.substring(1));
  }, [location]);

  const pages = [
    {
      name: "Home",
      icon: <FaHome className="block sm:hidden text-2xl" />,
    },
    {
      name: "Shop",
      icon: <FaShoppingCart className="block sm:hidden text-2xl" />,
    },
    {
      name: "Cart",
      icon: <FaShoppingBag className="block sm:hidden text-2xl" />,
    },
    { name: "Login", icon: <FaUser className="block sm:hidden text-2xl" /> },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
      fixed sm:absolute z-10 inset-x-0 bottom-0 sm:top-0
      flex items-center
      w-[100svw] h-[7.5svh]
      p-1
      bg-light-flash dark:bg-dark-rich
      overflow-hidden
      "
    >
      <NavLink
        to="/"
        className="
        hidden sm:flex items-center gap-2
        w-1/3
        px-4
      "
      >
        <img
          src="logo.png"
          alt="company logo"
          className="
          object-cover
          max-w-[40px]"
        />
        <span
          className="
        w-full
        text-logo-name font-Caveat font-bold"
        >
          React Store
        </span>
      </NavLink>

      <ul
        className="
        flex justify-around sm:justify-evenly
        w-full sm:w-2/3
        text-body-text
        "
      >
        {pages.map((page, idx) => (
          <NavLink
            key={idx}
            to={page.name === "Home" ? "/" : `/${page.name.toLowerCase()}`}
            className={`nav-item p-1 ${
              active === page.name.toLowerCase() &&
              "text-orange-cstm duration-500"
            }`}
          >
            <li className="hidden sm:block">{page.name}</li>
            {page.icon}
          </NavLink>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
