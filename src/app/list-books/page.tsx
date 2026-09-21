"use client";

import React, { useContext } from "react";
import { BooksContext } from "./../../context/BooksContext";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  console.log(readBooks, "listed");
  console.log(wishList, "Wishlisted");
  return <div>listed books</div>;
};

export default ListedBooks;
