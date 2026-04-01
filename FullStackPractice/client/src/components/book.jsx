import { FaHeart, FaHeartCrack, FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book, onEdit = (f) => f, onDelete = (f) => f }) => {
  let { _id, title, author, numberInStock, price, rating, publishYear, like } =
    book;
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{numberInStock}</td>
      <td>${price}</td>
      <td>{rating}</td>
      <td>{publishYear.split("T")[0]}</td>
      <td>{like ? <FaHeart color="red" /> : <FaHeartCrack color="gray" />}</td>
      <td>
        {
          //Could also use <Link> here to nav to update
          <FaEdit onClick={() => onEdit(_id)} />
        }
      </td>
      <td>{<FaTrash onClick={() => onDelete(_id)} />}</td>
    </tr>
  );
};

export default Book;
