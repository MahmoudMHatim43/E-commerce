import React from "react";

function Steps({ steps }) {
  return (
    <div className="bg-light-flash dark:bg-dark-smoke text-light-t1 dark:text-dark-t1 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-light-flash dark:bg-gray-900 p-6 rounded-xl shadow-xl text-center"
            >
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4 text-purple-600">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-light-t2 dark:text-dark-t2">
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
