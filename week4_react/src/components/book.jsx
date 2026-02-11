import { FaHeart, FaTrash } from "react-icons/fa";

const Book = ({ book , deleteBook=f=>f}) => {
  return (
    <tr>
      <td>{book._id}</td>
      <td>{book.title}</td>
      <td>{book.category.name}</td>
      <td>{book.author}</td>
      <td>{book.numberInStock}</td>
      <td>{book.price}</td>
      <td>{book.publishYear.split("-")[0]}</td>
      <td>
        <FaHeart color={book.liked ? "red" : "grey"} />
      </td>
      <td><FaTrash onClick={() => deleteBook(book._id)}/></td>
    </tr>
  );
};
//for onclick use () => {actual onclick value}
//if passing directly it will just be executed on launch
//usually you'll use the arrow function on the app instead of here though, this is just example

export default Book;
