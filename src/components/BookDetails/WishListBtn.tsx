// "use client";
// import { Ibook } from "@/type/books.type";
// import React, { useContext } from "react";
// import { BooksContext } from "./../../context/BooksContext";
// import { toast } from "react-toastify";

// const WishListBtn = ({ singleBook }: { singleBook: Ibook }) => {
//   const { wishList, setWishList } = useContext(BooksContext);

//   const handelWishListBook = () => {
//     setWishList([...wishList, singleBook]);
//     toast.success(`You have added ${singleBook.bookName} to your Wishlist`);
//   };

//   return (
//     <button
//       onClick={() => handelWishListBook()}
//       className="btn bg-[#59C6D2] hover:bg-[#42a8b3] text-white border-none px-7 rounded-xl text-lg font-semibold capitalize"
//     >
//       Wishlist
//     </button>
//   );
// };

// export default WishListBtn;

"use client";
import { Ibook } from "@/type/books.type";
import React, { useContext } from "react";
import { BooksContext } from "./../../context/BooksContext";
import { toast } from "react-toastify";

const WishListBtn = ({ singleBook }: { singleBook: Ibook }) => {
  const context = useContext(BooksContext);

  // Safely extract context values with default fallbacks
  const wishList = context?.wishList ?? [];
  const setWishList = context?.setWishList;

  const handelWishListBook = () => {
    if (!setWishList) return;

    // Check if the book is already in Wishlist
    const isAlreadyWishlisted = wishList.some(
      (b) => b.bookId === singleBook.bookId,
    );
    if (isAlreadyWishlisted) {
      toast.warning(`"${singleBook.bookName}" is already in your Wishlist!`);
      return;
    }

    setWishList([...wishList, singleBook]);
    toast.success(`You have added "${singleBook.bookName}" to your Wishlist`);
  };

  return (
    <button
      onClick={handelWishListBook}
      className="btn bg-[#59C6D2] hover:bg-[#42a8b3] text-white border-none px-7 rounded-xl text-lg font-semibold capitalize"
    >
      Wishlist
    </button>
  );
};

export default WishListBtn;
