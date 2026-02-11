import { FaTrash } from "react-icons/fa";
import StarRating from "./starRating.jsx";

const Color = (
  { color = {}, deleteColor = (f) => f, updateRating = (f) => f },
  
) => {
  const { id, title, color: colorHex, rating, img } = color;

  const images = import.meta.glob("../assets/images/*.{jpg, png, svg}", {
    eager: true,
  });

  return (
    <div className="color">
      <h5>{title}</h5>
      <img src={`/images/${img}`} alt={title} width={100} height={50} />
      <div style={{ height: "100px", backgroundColor: colorHex }}>
        <p>{colorHex}</p>
      </div>
      <FaTrash onClick={() => deleteColor(id)} />
      <br />
      <StarRating
        rating={rating}
        updateRating={(newRating) => {
          console.log("Color.jsx function called with rating " + newRating + " and id", id)
          updateRating(id, newRating)
        }}
      />
      <p>Rating is {rating}/5</p>
    </div>
  );
};

export default Color;

//How to retrieve image
/**
 * From public folder:
 * src = "/images/xxx.img"
 *
 * From assets folder:
 * import all images from image folder (THIS IS VITE SPECIFIC FUNC)
 *               import from global     dir      files mathing this syntax   eager:true = preload everything (instead of lazy load)
 * const images = import.meta.glob("../assets/images/*.{jpg,png,svg}", {eager:true})
 */
