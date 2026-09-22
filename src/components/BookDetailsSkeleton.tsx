import React from "react";

const BookDetailsSkeleton = () => {
  return (
    <div className="container mx-auto my-12 px-4 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Book Image Box Skeleton */}
        <div className="lg:col-span-5 bg-gray-200 rounded-3xl p-12 flex items-center justify-center min-h-125">
          <div className="bg-gray-300 rounded-2xl h-112.5 w-72"></div>
        </div>

        {/* Right: Book Details Info Skeleton */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Title Placeholder */}
          <div className="h-10 bg-gray-200 rounded-md w-3/4 mb-3"></div>

          {/* Author Placeholder */}
          <div className="h-6 bg-gray-200 rounded-md w-1/3 mb-4"></div>

          <div className="border-t border-gray-200 my-2"></div>

          {/* Category Placeholder */}
          <div className="h-6 bg-gray-200 rounded-md w-1/4 my-2"></div>

          <div className="border-t border-gray-200 my-2"></div>

          {/* Review Placeholder */}
          <div className="space-y-2 my-3">
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
          </div>

          {/* Tags Placeholder */}
          <div className="flex items-center gap-4 my-4">
            <div className="h-5 bg-gray-200 rounded-md w-10"></div>
            <div className="flex gap-3">
              <div className="bg-gray-200 h-8 w-20 rounded-full"></div>
              <div className="bg-gray-200 h-8 w-24 rounded-full"></div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-2"></div>

          {/* Meta Info Grid Placeholder */}
          <div className="space-y-3 my-4 max-w-md">
            <div className="grid grid-cols-2">
              <div className="h-5 bg-gray-200 rounded-md w-32"></div>
              <div className="h-5 bg-gray-200 rounded-md w-16"></div>
            </div>
            <div className="grid grid-cols-2">
              <div className="h-5 bg-gray-200 rounded-md w-24"></div>
              <div className="h-5 bg-gray-200 rounded-md w-28"></div>
            </div>
            <div className="grid grid-cols-2">
              <div className="h-5 bg-gray-200 rounded-md w-36"></div>
              <div className="h-5 bg-gray-200 rounded-md w-16"></div>
            </div>
            <div className="grid grid-cols-2">
              <div className="h-5 bg-gray-200 rounded-md w-20"></div>
              <div className="h-5 bg-gray-200 rounded-md w-12"></div>
            </div>
          </div>

          {/* Action Buttons Placeholder */}
          <div className="flex gap-4 mt-4">
            <div className="bg-gray-200 rounded-xl h-12 w-28"></div>
            <div className="bg-gray-200 rounded-xl h-12 w-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsSkeleton;
