import Color from "./color.jsx";
const ColorList = ({
  colors = [],
  deleteColor = (f) => f,
  updateRating = (f) => f,
}) =>
  !colors.length ? (
    <h2>No Colors</h2>
  ) : (
    <div>
      <h2>Showing {colors.length} Colors</h2>
      <div className="colors">
        {colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            deleteColor={deleteColor}
            updateRating={updateRating}
          />
        ))}
      </div>
    </div>
  );

export default ColorList;
