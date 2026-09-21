import BookCard from "../shared/BookCard";
import { Ibook } from "./../../type/books.type";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const bookData = await getBooks();

  return (
    <section className="container mx-auto my-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif">Books</h1>

      {/* Grid wrapper ekbar e rakhben */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {bookData.map((book: Ibook) => (
          <BookCard key={book.bookId || book.bookId} bookProp={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
