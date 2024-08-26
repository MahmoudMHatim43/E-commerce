import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-[100svh] bg-light-main dark:bg-dark-main">
      <div className="w-full max-w-md p-8 bg-white dark:bg-dark-second rounded-lg shadow-lg">
        <h2 className="text-heading-lg text-light-t1 dark:text-dark-t1 font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-light-t2 dark:text-dark-t2 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 text-light-t1 dark:text-dark-t1 bg-light-second dark:bg-dark-main border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-light-t2 dark:text-dark-t2 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 text-light-t1 dark:text-dark-t1 bg-light-second dark:bg-dark-main border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="remember"
              className="ml-2 text-light-t2 dark:text-dark-t2"
            >
              Remember Me
            </label>
          </div>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button className="w-full p-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="text-sm text-light-t2 dark:text-dark-t2">or</span>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
