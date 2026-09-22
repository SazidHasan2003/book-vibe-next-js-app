import Hero from "./../components/homepage/Hero";
import Books from "./../components/homepage/Books";
import React, { Suspense } from "react";
import BookCardSkeleton from "@/components/BookCardSkeleton";

const page = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<BookCardSkeleton />}>
        <Books />
      </Suspense>
    </div>
  );
};

export default page;
