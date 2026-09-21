import { Ibook } from "./../../../type/books.type";
import Image from "next/image";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

interface Iparams {
  params: Promise<{
    id: string;
  }>;
}

const BookDetailsPage = async ({ params }: Iparams) => {
  const { id } = await params;
  const booksData = await getBooks();

  // 1. 'fine' er poriborte 'find' hobe
  const singleBook: Ibook | undefined = booksData.find((b: Ibook) => {
    return String(b.bookId) === String(id);
  });

  // Jodi book na paowa jay
  if (!singleBook) {
    return (
      <div className="container mx-auto my-12 text-center text-2xl font-bold">
        Book not found!
      </div>
    );
  }

  // 2. Destructuring properties from singleBook
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Book Image Box */}
        <div className="lg:col-span-5 bg-[#f3f3f3] rounded-3xl p-12 flex items-center justify-center min-h-125">
          <Image
            src={image}
            alt={bookName}
            width={325}
            height={450}
            className="rounded-2xl shadow-xl object-contain h-112.5 w-auto"
            priority
          />
        </div>

        {/* Right: Book Details Info */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Title */}
          <h1 className="text-4xl lg:text-[40px] font-bold text-[#131313] font-serif mb-3">
            {bookName}
          </h1>

          {/* Author */}
          <p className="text-[#131313CC] text-xl font-medium mb-4">
            By : {author}
          </p>

          <div className="border-t border-[#13131326] my-2"></div>

          {/* Category */}
          <p className="text-[#131313CC] text-xl font-medium my-2">
            {category}
          </p>

          <div className="border-t border-[#13131326] my-2"></div>

          {/* Review */}
          <p className="text-[#131313B3] leading-relaxed my-3">
            <span className="font-bold text-[#131313]">Review : </span>
            {review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-4 my-4">
            <span className="font-bold text-[#131313]">Tag</span>
            <div className="flex gap-3 flex-wrap">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#23be0a15] text-[#23BE0A] text-base px-4 py-1.5 rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#13131326] my-2"></div>

          {/* Meta Info Grid */}
          <div className="space-y-3 my-4 max-w-md">
            <div className="grid grid-cols-2 text-base">
              <span className="text-[#131313B3]">Number of Pages:</span>
              <span className="font-semibold text-[#131313]">{totalPages}</span>
            </div>
            <div className="grid grid-cols-2 text-base">
              <span className="text-[#131313B3]">Publisher:</span>
              <span className="font-semibold text-[#131313]">{publisher}</span>
            </div>
            <div className="grid grid-cols-2 text-base">
              <span className="text-[#131313B3]">Year of Publishing:</span>
              <span className="font-semibold text-[#131313]">
                {yearOfPublishing}
              </span>
            </div>
            <div className="grid grid-cols-2 text-base">
              <span className="text-[#131313B3]">Rating:</span>
              <span className="font-semibold text-[#131313]">{rating}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="btn btn-outline border-gray-300 hover:bg-[#23BE0A] hover:border-[#23BE0A] px-7 rounded-xl text-lg font-semibold capitalize">
              Read
            </button>
            <button className="btn bg-[#59C6D2] hover:bg-[#42a8b3] text-white border-none px-7 rounded-xl text-lg font-semibold capitalize">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
