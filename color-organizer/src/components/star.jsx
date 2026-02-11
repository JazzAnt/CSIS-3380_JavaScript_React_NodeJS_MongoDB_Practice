import { FaStar } from "react-icons/fa";
const Star = ({ selected = false, updateRating = f=>f}) => {
  return <FaStar color={selected ? "green" : "grey"} onClick={() => {
    console.log("Star.jsx function called")
    updateRating()

  }}/>;
};

export default Star;
