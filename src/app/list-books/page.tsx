"use client";

import React, { useContext } from "react";
import { BooksContext } from "./../../context/BooksContext";

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext);
  console.log(readBooks, "listed");
  return <div>listed books</div>;
};

export default ListedBooks;
