import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-light-flash dark:bg-dark-smoke text-light-t1 dark:text-dark-t1 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-Josefin">
          <div className="md:col-span-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Terms · Privacy Policy
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-3">Products</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Web Studio",
                "DynamicBox Flex",
                "Programming Forms",
                "Integrations",
                "Command-line",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-purple-600 transition duration-200">
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Documentation",
                "Tutorials & Guides",
                "Blog",
                "Support Center",
                "Partners",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-purple-600 transition duration-200">
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "About us",
                "Company values",
                "Pricing",
                "Privacy Policy",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-purple-600 transition duration-200">
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 mt-8 md:mt-0">
            <h3 className="text-lg font-bold text-purple-600 mb-3">
              Subscribe
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 flex-grow rounded-l-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              />
              <button
                type="submit"
                className="p-3 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition duration-300 flex items-center justify-center">
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-600 dark:text-gray-400">
        <span className="text-sm">Made with ♥ by Hoota</span>
      </div>
    </footer>
  );
}

export default Footer;
