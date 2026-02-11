import { useState } from "react";
import "./App.css";
import colorData from "./assets/color-data.json";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import AddColor from "./components/addColor.jsx";
import ColorList from "./components/colorList.jsx";

//NPM Package that allows to create Universally Unique Identifiers
//obtained from npm install uuid
import { v4 } from "uuid";
import "./styles.css";
import NavBar from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [colors, setColors] = useState(colorData);

  const deleteColor = (idToDelete) => {
    const updatedColors = colors.filter((color) => color.id !== idToDelete);
    setColors(updatedColors);
  };

  const updateRating = (id, newRating) => {
    console.log(
      `App.jsx function called with ${id} ID and ${newRating} rating`,
    );
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, rating: newRating } : color,
    );
    setColors(updatedColors);
  };

  const addColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(), //this is a function that generates a unique id
        title: title,
        color: color,
        rating: 0,
        img: "yellow.jpg", //later can add a file upload field, for now default value
      },
    ];
    setColors(newColors);
  };

  return (
    <div>
      <Header title="My Color List" />
      <NavBar />
      <Routes>
        <Route path="/addcolor" element={<AddColor onAddColor={addColor} />} />
        <Route
          path="/"
          element={
            <ColorList
              colors={colors}
              deleteColor={deleteColor}
              updateRating={updateRating}
            />
          }
        />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
