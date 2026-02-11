import { useState } from "react";

const AddColor = ({onAddColor = (f) => f}) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submitColor = (event) => {
    event.preventDefault(); //this prevents the event from sending data to the server, keep form local
    onAddColor(title, color);
    //after submitting the form, reset the input fields
    setTitle("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submitColor}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
        placeholder="color title"
        aria-required
      />
      <input
        type="color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
        required
        aria-required
      />
      <button type="submit">Add Color</button>
    </form>
  );
};

export default AddColor;
//React Forms
//Use onChange to detect changes and modify state
//onchange event, event.target is the content of the event

//Use the form's onSubmit to call the function
