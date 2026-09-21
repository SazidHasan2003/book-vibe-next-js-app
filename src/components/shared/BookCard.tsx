import Image from "next/image";
import { Ibook } from "./../../type/books.type";

interface bookProp {
  bookProp: Ibook;
}

const BookCard = ({ bookProp }: bookProp) => {
  const { bookName, author, image, rating, category, tags } = bookProp;

  return (
    <div className="card w-full max-w-92.5 bg-base-100 shadow-xl border border-gray-100 rounded-3xl">
      {/* 1. Image Container */}
      <figure className="px-6.25 pt-6.25 bg-[#f3f3f3] mx-6.25 mt-6.25 rounded-2xl h-55 flex items-center justify-center">
        <Image
          src={image}
          alt={bookName}
          width={130}
          height={166}
          className="rounded-xl w-auto h-41.5 object-contain"
        />
      </figure>

      {/* 2. Content Details */}
      <div className="card-body px-6.25 py-5">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {tags?.map((tag, index) => (
            <div
              key={index}
              className="bg-[#23be0a15] text-[#23BE0A] text-[16px] px-4 py-1.5 rounded-full font-medium"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Title */}
        <h2 className="card-title text-[24px] font-bold text-[#131313] my-2 font-serif">
          {bookName}
        </h2>

        {/* Author */}
        <p className="text-[#131313CC] text-[16px] font-sans -mt-1 mb-1">
          By : {author}
        </p>

        {/* Divider */}
        <div className="border border-dashed border-[#13131333] my-2.5"></div>

        {/* Footer info */}
        <div className="flex justify-between items-center text-[#131313CC] text-[16px] font-sans mt-1">
          <p>{category}</p>

          <div className="flex items-center gap-2">
            <p>{rating}</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[#131313CC]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.385a.563.563 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.499Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
