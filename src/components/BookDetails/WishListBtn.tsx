"use client";
import { Ibook } from "@/type/books.type";
import React, { useContext } from "react";
import { BooksContext } from "./../../context/BooksContext";

const WishListBtn = ({ singleBook }: { singleBook: Ibook }) => {
  const { wishList, setWishList } = useContext(BooksContext);

  const handelWishListBook = () => {
    setWishList([...wishList, singleBook]);
  };

  return (
    <button
      onClick={() => handelWishListBook()}
      className="btn bg-[#59C6D2] hover:bg-[#42a8b3] text-white border-none px-7 rounded-xl text-lg font-semibold capitalize"
    >
      Wishlist
    </button>
  );
};

export default WishListBtn;
