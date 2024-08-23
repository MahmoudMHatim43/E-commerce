// React:
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("");
  const location = useLocation();
  useEffect(() => {
    let curr = location.pathname;
    curr === "/" ? setActive("home") : setActive(curr.substring(1));
  }, [location]);
  const pages = ["Home", "Shop", "Cart", "Login"];
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 5, opacity: 1 }}
      className="flex items-center justify-between
      px-2 py-1 mx-auto w-[95svw] h-auto
      text-light_t1 dark:text-dark_t1 bg-gray_l1 dark:bg-gray_d1
      rounded-2xl shadow-md"
    >
      {/* logo */}
      <NavLink to="/" className="flex w-[30%] items-center gap-1">
        <img
          src="logo.png"
          alt="company logo"
          className="object-cover
          w-[40px]"
        />
        <span className="w-full text-logo-name font-Caveat font-bold">
          The Store
        </span>
      </NavLink>
      {/* list */}
      <div className="w-[70%]">
        <ul
          className="flex w-full justify-evenly
          text-body-text"
        >
          {pages.map((page, idx) => (
            <NavLink
              key={idx}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className={`nav-item p-2 ${
                active === page.toLowerCase() && "text-orange_c duration-500"
              }`}
            >
              {page}
            </NavLink>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
