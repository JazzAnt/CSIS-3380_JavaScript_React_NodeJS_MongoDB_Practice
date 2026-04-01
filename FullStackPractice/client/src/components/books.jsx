import Book from "./book";
const books = ({ books = [], onEdit = (f) => f, onDelete = (f) => f }) => {
  return (
    <section>
      {!books.length ? (
        <h2>No Books in the Library</h2>
      ) : (
        <div>
          <h3>Showing {books.length} books</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Publish Year</th>
                <th>Like</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <Book
                  key={book._id}
                  book={book}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default books;
