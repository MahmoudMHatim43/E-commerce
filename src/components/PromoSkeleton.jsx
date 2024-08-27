import React from "react";

function PromoSkeleton() {
  return (
    <div className="relative flex flex-col gap-4 w-[250px] p-4 bg-gray-200 dark:bg-zinc-800 rounded-2xl animate-pulse">
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="flex flex-col gap-1">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded mt-auto"></div>
    </div>
  );
}

export default PromoSkeleton;
