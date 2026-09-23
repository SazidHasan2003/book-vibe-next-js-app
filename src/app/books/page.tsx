import { Ibook } from "./../../type/books.type";
import BookCard from "./../../components/shared/BookCard";

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const Books = async () => {
  const bookData = await getBooks();

  return (
    <section className="container mx-auto my-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif">
        All Books
      </h1>

      {/* Grid wrapper ekbar e rakhben */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {bookData.map((book: Ibook) => (
          <BookCard key={book.bookId} bookProp={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
