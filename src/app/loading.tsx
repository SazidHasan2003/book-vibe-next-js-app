import React from "react";
import BookCardSkeleton from "@/components/BookCardSkeleton"; // path standard onujayi change kore niben

const Loading = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      {/* Dynamic Grid matching main layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <BookCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
