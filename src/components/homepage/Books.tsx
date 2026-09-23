import BookCard from "../shared/BookCard";
import { Ibook } from "./../../type/books.type";

const getBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
  );
  const data = await response.json();
  return data;
};

const Books = async () => {
  const bookData = await getBooks();

  return (
    <section className="container mx-auto my-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif">
        Explore Popular Books
      </h1>

      {/* Grid wrapper ekbar e rakhben */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {bookData
          ?.slice() // preventing manopolate orginal array
          .sort((a: Ibook, b: Ibook) => b.rating - a.rating)
          .slice(0, 6)
          .map((book: Ibook) => (
            <BookCard key={book.bookId} bookProp={book} />
          ))}
      </div>
    </section>
  );
};

export default Books;
