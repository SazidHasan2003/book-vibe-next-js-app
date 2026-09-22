"use client";

import React, { useContext, useState } from "react";
import { BooksContext } from "./../../context/BooksContext";
import Image from "next/image";
import Link from "next/link";
import { Ibook } from "@/type/books.type";

interface IBooksContext {
  readBooks: Ibook[];
  wishList: Ibook[];
}

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext) as IBooksContext;
  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");
  const [sortBy, setSortBy] = useState<string>("");

  // Tab dynamic selection
  let currentDisplayBooks: Ibook[] =
    activeTab === "read" ? readBooks || [] : wishList || [];

  // Sorting logic
  if (sortBy === "rating") {
    currentDisplayBooks = [...currentDisplayBooks].sort(
      (a, b) => b.rating - a.rating,
    );
  } else if (sortBy === "pages") {
    currentDisplayBooks = [...currentDisplayBooks].sort(
      (a, b) => b.totalPages - a.totalPages,
    );
  } else if (sortBy === "year") {
    currentDisplayBooks = [...currentDisplayBooks].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing,
    );
  }

  return (
    <div className="container mx-auto my-10 px-4">
      {/* Page Title */}
      <div className="bg-[#1313130d] py-8 rounded-3xl text-center mb-8">
        <h1 className="text-3xl font-bold text-[#131313]">Books</h1>
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-center mb-12">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#23BE0A] hover:bg-[#1f9e09] text-white font-semibold px-6 rounded-xl border-none min-h-11 h-11 flex items-center gap-2"
          >
            Sort By: {sortBy ? sortBy.toUpperCase() : "Select"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-1 menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-2"
          >
            <li>
              <a onClick={() => setSortBy("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => setSortBy("pages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => setSortBy("year")}>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#13131333] mb-8">
        <button
          onClick={() => setActiveTab("read")}
          className={`px-4 py-3 text-lg font-medium border-b-2 transition-colors ${
            activeTab === "read"
              ? "border-[#23BE0A] text-[#23BE0A] font-bold"
              : "border-transparent text-[#13131380]"
          }`}
        >
          Read Books ({readBooks?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-4 py-3 text-lg font-medium border-b-2 transition-colors ${
            activeTab === "wishlist"
              ? "border-[#23BE0A] text-[#23BE0A] font-bold"
              : "border-transparent text-[#13131380]"
          }`}
        >
          Wishlist Books ({wishList?.length || 0})
        </button>
      </div>

      {/* Book List Stack */}
      <div className="flex flex-col gap-6">
        {currentDisplayBooks.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-lg">
            No books found in this list.
          </div>
        ) : (
          currentDisplayBooks.map((book: Ibook) => {
            const {
              bookId,
              bookName,
              author,
              image,
              rating,
              category,
              tags,
              publisher,
              yearOfPublishing,
              totalPages,
            } = book;

            return (
              <div
                key={bookId}
                className="flex flex-col lg:flex-row gap-6 p-6 bg-white border border-[#13131326] rounded-3xl items-center shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image Box */}
                <div className="bg-[#f3f3f3] rounded-2xl p-6 flex items-center justify-center w-full lg:w-56 h-56 shrink-0">
                  <Image
                    src={image}
                    alt={bookName}
                    width={130}
                    height={170}
                    className="object-contain h-40 w-auto rounded-md"
                  />
                </div>

                {/* Book Information */}
                <div className="flex-1 w-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#131313] font-serif mb-2">
                      {bookName}
                    </h3>
                    <p className="text-[#131313CC] font-medium text-base mb-4">
                      By : {author}
                    </p>

                    {/* Tags & Publishing Year */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="font-bold text-[#131313]">Tag</span>
                      {tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#23be0a15] text-[#23BE0A] text-sm px-4 py-1.5 rounded-full font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                      <span className="flex items-center gap-2 text-[#131313CC] text-sm ml-auto lg:ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                        Year of Publishing: {yearOfPublishing}
                      </span>
                    </div>

                    {/* Publisher & Pages info */}
                    <div className="flex flex-wrap items-center gap-6 text-[#13131399] text-sm mb-4">
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        Publisher: {publisher}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                          />
                        </svg>
                        Page {totalPages}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#13131326] my-2"></div>

                  {/* Footer Badges & Button */}
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="bg-[#328ef326] text-[#328EFF] px-4 py-2 rounded-full text-sm font-medium">
                      Category: {category}
                    </span>
                    <span className="bg-[#ffac3326] text-[#FFAC33] px-4 py-2 rounded-full text-sm font-medium">
                      Rating: {rating}
                    </span>
                    <Link
                      href={`/books/${bookId}`}
                      className="btn bg-[#23BE0A] hover:bg-[#1f9e09] text-white px-5 rounded-full text-sm font-medium border-none min-h-10 h-10 ml-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
