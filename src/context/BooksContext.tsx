"use client";

import { Ibook } from "@/type/books.type"; // আপনার Ibook ইন্টারফেস ইমপোর্ট করে নিন
import React, { createContext, ReactNode, useState } from "react";

// ১. Context-এর জন্য Interface তৈরি করুন
interface BooksContextType {
  readBooks: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  wishList: Ibook[];
  setWishList: React.Dispatch<React.SetStateAction<Ibook[]>>;
}

// ২. createContext-এ Interface এবং Default Value যুক্ত করুন
export const BooksContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  // ৩. useState-এ explicit Ibook[] type বলে দিন
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishList, setWishList] = useState<Ibook[]>([]);

  const sharedData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
