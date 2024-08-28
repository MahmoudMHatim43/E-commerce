import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600">
      <div className="w-full max-w-md p-8 bg-white dark:bg-dark-second rounded-2xl shadow-2xl">
        <h2 className="text-3xl text-gray-800 dark:text-gray-200 font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 dark:text-gray-400 mb-2">
            Email Address
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-dark-main border border-gray-300 dark:border-gray-600 rounded-lg focus-within:border-blue-500">
            <div className="p-3 text-gray-400 dark:text-gray-500">
              <FaEnvelope />
            </div>
            <input
              type="email"
              id="email"
              className="flex-1 p-3 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 dark:text-gray-400 mb-2">
            Password
          </label>
          <div className="flex items-center bg-gray-100 dark:bg-dark-main border border-gray-300 dark:border-gray-600 rounded-lg focus-within:border-blue-500">
            <div className="p-3 text-gray-400 dark:text-gray-500">
              <FaLock />
            </div>
            <input
              type="password"
              id="password"
              className="flex-1 p-3 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="remember"
              className="ml-2 text-gray-600 dark:text-gray-400">
              Remember Me
            </label>
          </div>
          <a
            href="/shop"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400">
            Forgot Password?
          </a>
        </div>

        <button className="w-full p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl transition">
          Login
        </button>

        <div className="flex items-center justify-center my-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">or</span>
        </div>

        <div className="text-center">
          <a
            href="/shop"
            className="text-blue-600 hover:underline dark:text-blue-400">
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
