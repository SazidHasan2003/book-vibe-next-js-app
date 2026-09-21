"use client";
import { Ibook } from "@/type/books.type";
import React, { useContext } from "react";
import { BooksContext } from "./../../context/BooksContext";

const ReadBookBtn = ({ singleBook }: { singleBook: Ibook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handelReadBook = () => {
    setReadBooks([...readBooks, singleBook]);
  };

  return (
    <button
      onClick={() => handelReadBook()}
      className="btn btn-outline border-gray-300 hover:bg-[#23BE0A] hover:border-[#23BE0A] px-7 rounded-xl text-lg font-semibold capitalize"
    >
      Read
    </button>
  );
};

export default ReadBookBtn;
