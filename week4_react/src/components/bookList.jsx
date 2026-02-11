import Book from "./book";
//f=>f is a function that does nothing, useful as a default function for func arguments
const BookList = ({ books = [], deleteBook = (f) => f }) => {
  if (books.length === 0) return <h2>There are no books :(</h2>;

  let bookSpelling = "Books";
  if (books.length === 1) bookSpelling = "Book";

  return (
    <>
      <h2>
        Showing {books.length} {bookSpelling}
      </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Year</th>
            <th>Liked</th>
            <th>Action(s)</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book._id} book={book} deleteBook={deleteBook} />
          ))}
        </tbody>
      </table>
    </>
  );
}; //key is a unique identifier for each data. usually uses _id

export default BookList;
