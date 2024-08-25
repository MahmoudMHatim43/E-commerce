import React from "react";

function Footer() {
  return (
    <footer className="bg-dark-smoke text-dark-t1 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <p className="text-dark-t2 mb-4">Terms · Privacy Policy</p>
        </div>
        <div>
          <h3 className="text-dark-t1 font-semibold">Products</h3>
          <ul className="text-dark-t2 mt-2 space-y-2">
            <li>Web Studio</li>
            <li>DynamicBox Flex</li>
            <li>Programming Forms</li>
            <li>Integrations</li>
            <li>Command-line</li>
          </ul>
        </div>
        <div>
          <h3 className="text-dark-t1 font-semibold">Resources</h3>
          <ul className="text-dark-t2 mt-2 space-y-2">
            <li>Documentation</li>
            <li>Tutorials & Guides</li>
            <li>Blog</li>
            <li>Support Center</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="text-dark-t1 font-semibold">Company</h3>
          <ul className="text-dark-t2 mt-2 space-y-2">
            <li>Home</li>
            <li>About us</li>
            <li>Company values</li>
            <li>Pricing</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-dark-t1 font-semibold">Subscribe</h3>
          <p className="text-dark-t2 mt-2">
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
              className="p-2 bg-purple-500 text-white rounded-r-md hover:bg-purple-600"
            >
              →
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-10 text-dark-t2">
        <p>Made with ♥ by Hoota</p>
      </div>
    </footer>
  );
}

export default Footer;
