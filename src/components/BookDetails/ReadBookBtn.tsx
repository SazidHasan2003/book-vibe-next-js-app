// "use client";
// import { Ibook } from "@/type/books.type";
// import React, { useContext } from "react";
// import { BooksContext } from "./../../context/BooksContext";
// import { toast } from "react-toastify";

// const ReadBookBtn = ({ singleBook }: { singleBook: Ibook }) => {
//   const { readBooks, setReadBooks } = useContext(BooksContext);

//   const handelReadBook = () => {
//     setReadBooks([...readBooks, singleBook]);
//     toast.success(`You have added ${singleBook.bookName} to your Readlist`);
//   };

//   return (
//     <button
//       onClick={() => handelReadBook()}
//       className="btn btn-outline border-gray-300 hover:bg-[#23BE0A] hover:border-[#23BE0A] px-7 rounded-xl text-lg font-semibold capitalize"
//     >
//       Read
//     </button>
//   );
// };

// export default ReadBookBtn;

"use client";
import { Ibook } from "@/type/books.type";
import React, { useContext } from "react";
import { BooksContext } from "./../../context/BooksContext";
import { toast } from "react-toastify";

const ReadBookBtn = ({ singleBook }: { singleBook: Ibook }) => {
  const context = useContext(BooksContext);

  // Safely fallback or destructure properties
  const readBooks = context?.readBooks ?? [];
  const setReadBooks = context?.setReadBooks;

  const handelReadBook = () => {
    if (!setReadBooks) return;

    // Check if the book already exists in readBooks to prevent duplicate entries
    const isAlreadyRead = readBooks.some((b) => b.bookId === singleBook.bookId);

    if (isAlreadyRead) {
      toast.warning(`"${singleBook.bookName}" is already in your Readlist!`);
      return;
    }

    setReadBooks([...readBooks, singleBook]);
    toast.success(`You have added ${singleBook.bookName} to your Readlist`);
  };

  return (
    <button
      onClick={handelReadBook}
      className="btn btn-outline border-gray-300 hover:bg-[#23BE0A] hover:border-[#23BE0A] px-7 rounded-xl text-lg font-semibold capitalize"
    >
      Read
    </button>
  );
};

export default ReadBookBtn;
