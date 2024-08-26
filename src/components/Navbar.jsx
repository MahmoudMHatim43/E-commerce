// React:
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaShoppingBag,
  FaBars,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ToggleButton from "../components/ToggleButton";
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

function Navbar() {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    let curr = location.pathname;
    curr === "/" ? setActive("home") : setActive(curr.substring(1));
  }, [location]);

  return (
    <>
      {/*  */}
      <>
        <div
          className="
        sm:hidden"
        >
          <FaBars
            className="
        absolute top-4 left-4 z-50
        text-3xl text-orange-cstm"
          />
          <ToggleButton />
        </div>
      </>
      {/*  */}
      <>
        <motion.nav
          className="
      fixed sm:absolute z-50 inset-x-0 bottom-0 sm:top-0
      flex items-center justify-between
      h-[7.5svh]
      p-1
     bg-[#000000] text-[#e1e1e1]
      overflow-hidden
      "
        >
          <NavLink
            to="/"
            className="
        hidden sm:flex items-center gap-4
        h-full
        px-4
        overflow-hidden
      "
          >
            <img
              src="logo.png"
              alt="company logo"
              className="
          object-cover
          w-14"
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
        flex justify-around
        w-full sm:w-2/3
        text-body-text
        "
          >
            {pages.map((page, idx) => (
              <NavLink
                key={idx}
                to={page.name === "Home" ? "/" : `/${page.name.toLowerCase()}`}
                className={`nav-item p-2 ${
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
      </>
    </>
  );
}

export default Navbar;
