import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  setSelectedCategory,
} from "../../store/slices/products";
import { FaTshirt, FaShoePrints, FaBoxes } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
const icons = {
  Clothes: <FaTshirt />,
  Electronics: <MdDevices />,
  Furniture: <GiSofa />,
  Shoes: <FaShoePrints />,
  Miscellaneous: <FaBoxes />,
};
function SideBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { categories, selectedCategory } = useSelector(
    (state) => state.products
  );
  return (
    <div
      className="
    col-span-12 sm:col-span-3 
    min-h-full w-[95%] mx-auto
    p-4
  bg-light-second dark:bg-dark-second
    rounded-lg shadow-md"
    >
      <ul className="flex sm:flex-col gap-4 sm:gap-6">
        {categories.map((category, idx) => (
          <li
            key={idx}
            onClick={() => dispatch(setSelectedCategory(category))}
            className={`
              flex items-center gap-2
              w-full
              mx-auto
              p-2
              cursor-pointer hover:text-blue-600 
              transition
              ${
                selectedCategory === category
                  ? "text-blue-600"
                  : "text-light-t1 dark:text-dark-t1"
              }
              `}
          >
            <span className="text-2xl">{icons[category]}</span>
            <span className="hidden md:inline-block">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
