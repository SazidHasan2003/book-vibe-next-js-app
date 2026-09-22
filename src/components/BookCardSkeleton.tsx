import React from "react";

const BookCardSkeleton = () => {
  return (
    <div className="card w-full max-w-92.5 bg-base-100 shadow-xl border border-gray-100 rounded-3xl animate-pulse">
      {/* 1. Image Placeholder */}
      <figure className="px-6.25 pt-6.25 bg-gray-200 mx-6.25 mt-6.25 rounded-2xl h-55 flex items-center justify-center">
        <div className="rounded-xl w-32 h-41.5 bg-gray-300"></div>
      </figure>

      {/* 2. Content Details Placeholder */}
      <div className="card-body px-6.25 py-5">
        {/* Tags Placeholder */}
        <div className="flex gap-2 flex-wrap">
          <div className="bg-gray-200 h-8 w-20 rounded-full"></div>
          <div className="bg-gray-200 h-8 w-24 rounded-full"></div>
        </div>

        {/* Title Placeholder */}
        <div className="h-7 bg-gray-200 rounded-md my-2 w-3/4"></div>

        {/* Author Placeholder */}
        <div className="h-4 bg-gray-200 rounded-md -mt-1 mb-1 w-1/2"></div>

        {/* Divider Placeholder */}
        <div className="border border-dashed border-gray-200 my-2.5"></div>

        {/* Footer info Placeholder */}
        <div className="flex justify-between items-center mt-1">
          <div className="h-5 bg-gray-200 rounded-md w-24"></div>

          <div className="flex items-center gap-2">
            <div className="h-5 bg-gray-200 rounded-md w-8"></div>
            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Button Placeholder */}
        <div className="card-actions justify-end mt-4">
          <div className="bg-gray-200 w-full rounded-xl min-h-11 h-11"></div>
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
