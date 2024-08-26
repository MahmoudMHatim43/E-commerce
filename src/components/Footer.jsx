import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="
        grid grid-cols-2 md:grid-cols-4 gap-4
        max-w-6xl
        mx-auto p-4
        font-Josefin"
      >
        {/*  */}
        <div
          className="
          md:col-span-2
          "
        >
          <p className="text-light-t2 dark:text-dark-t2">
            Terms · Privacy Policy
          </p>
        </div>
        {/*  */}
        <div>
          <span
            className="
          text-purple-600 text-body-text font-bold
            "
          >
            Products
          </span>
          <ul className="text-light-t2 dark:text-dark-t2 mt-2 space-y-2">
            <li>Web Studio</li>
            <li>DynamicBox Flex</li>
            <li>Programming Forms</li>
            <li>Integrations</li>
            <li>Command-line</li>
          </ul>
        </div>
        {/*  */}
        <div>
          <span
            className="
          text-purple-600 text-body-text font-bold
          "
          >
            Resources
          </span>
          <ul className="text-light-t2 dark:text-dark-t2 mt-2 space-y-2">
            <li>Documentation</li>
            <li>Tutorials & Guides</li>
            <li>Blog</li>
            <li>Support Center</li>
            <li>Partners</li>
          </ul>
        </div>
        {/*  */}
        <div>
          <span
            className="
          text-purple-600 text-body-text font-bold
          "
          >
            Company
          </span>
          <ul className="text-light-t2 dark:text-dark-t2 mt-2 space-y-2">
            <li>Home</li>
            <li>About us</li>
            <li>Company values</li>
            <li>Pricing</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*  */}
        <div className="md:col-span-2">
          <span
            className="
          text-purple-600 text-body-text font-bold
            "
          >
            Subscribe
          </span>
          <p className="text-light-t2 dark:text-dark-t2 mt-2">
            Get the latest news and articles to your inbox every month.
          </p>
          <form className="flex mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-md bg-gray-800 text-white outline-none w-full"
            />
            <button
              type="submit"
              className="px-4 bg-purple-500 text-white rounded-r-md hover:bg-purple-700 duration-500"
            >
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
      {/*  */}
      <div className="text-center mt-10 text-dark-t2">
        <span className="text-body-text">Made with ♥ by Hoota</span>
      </div>
    </>
  );
}

export default Footer;
