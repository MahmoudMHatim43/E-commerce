import React from "react";

function Steps({ steps }) {
  return (
    <div className="bg-light-flash dark:bg-dark-smoke text-light-t1 dark:text-dark-t1 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col items-center">
                <div className="bg-purple-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Steps;
