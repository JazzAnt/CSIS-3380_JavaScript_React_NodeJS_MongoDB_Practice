import { FaHeart, FaRegHeart } from "react-icons/fa";
const Books = ({ books = [] }) => {
  return (
    <section>
      <h1>This is a small book library</h1>
      {books.length === 0 ? (
        <h2>There are no books</h2>
      ) : (
        <>
          <h3>Currently showing {books.length} books</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.numberInStock}</td>
                  <td>{book.price}</td>
                  <td>{book.rating}</td>
                  <td>{book.publishYear}</td>
                  <td>{book.like ? <FaHeart /> : <FaRegHeart />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default Books;
