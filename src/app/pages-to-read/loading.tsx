import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="bg-[#13131303] border border-[#1313130d] rounded-3xl p-6 md:p-12 min-h-125 flex flex-col justify-center items-center">
        <div className="w-full h-112.5 flex flex-col justify-end p-4 animate-pulse">
          {/* Chart Bars Skeleton */}
          <div className="flex items-end justify-between h-[80%] w-full gap-4 px-8 border-b border-gray-200">
            <div className="w-16 bg-gray-200 rounded-t-full h-[65%]"></div>
            <div className="w-16 bg-gray-200 rounded-t-full h-[85%]"></div>
            <div className="w-16 bg-gray-200 rounded-t-full h-[45%]"></div>
            <div className="w-16 bg-gray-200 rounded-t-full h-[95%]"></div>
            <div className="w-16 bg-gray-200 rounded-t-full h-[70%]"></div>
          </div>
          {/* Bottom Labels Skeleton */}
          <div className="flex justify-between w-full mt-6 px-4">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
