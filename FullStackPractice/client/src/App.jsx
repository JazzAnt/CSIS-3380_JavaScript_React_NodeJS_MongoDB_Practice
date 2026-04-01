import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

import NavBar from "./components/navBar";
import Header from "./components/header";
import Footer from "./components/footer";
import Books from "./components/books";
import AddBook from "./components/addBook";
import UpdateBook from "./components/updateBook";

function App() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  /**
   * App is called every time React is updated to refresh the data.
   * Use effect is used for functions that should be run only once
   * such as data fetching. With useEffect, the function will only
   * be called on first render and not subsequent App() calls.
   */
  /**
   * Params useEffect(setup, dependencies)
   * setup: the function of your useEffect logic, can also return a cleanup function
   * dependencies: when will useEffect run?
   */
  useEffect(
    () => {
      const fetchData = async () => {
        const URL = "http://localhost:3000/books";
        try {
          const response = await axios.get(URL);
          setBooks(response.data);
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchData();

      return () => {
        /**
         * This is the cleanup function, called when component unmounts to remove
         * garbage data and prevent memory leaks. But for this it's not needed since
         * component is main so if it's unmounted the app is nuked.
         */
      };
    },
    [
      /**
       * These are the dependencies. If you include a variable (e.g. books) then
       * setup function will re-run whenever said variable is updated. Useful if
       * you want to implement a refresh button on your app.
       *
       * If it's empty it will run only once, on app render.
       */
    ],
  );

  const onAdd = async (book) => {
    const URL = "http://localhost:3000/books";
    console.log(book);
    try {
      const { status, data } = await axios.post(URL, book);
      console.log(status);
      console.log(data);
      if (status === 201) {
        //update data locally if success
        const updatedBooks = [...books, book];
        setBooks(updatedBooks);
      } else {
        console.log("Error in adding book");
      }
    } catch (error) {
      console.error("Error in adding", error.message);
    }
  };

  const onEdit = async (id, updatedBook) => {
    const URL = `http://localhost:3000/books/${id}`;
    try {
      const { status, data } = await axios.put(URL, updatedBook);
      if (status === 200) {
        //update book locally
        const updatedBooks = books.map((book) =>
          book._id === id ? updatedBook : book,
        );
        setBooks(updatedBooks);
      } else {
        console.log("Error, the book can't be updated");
      }
    } catch (error) {
      console.error("Error in updating book", error.message);
    }
  };

  const onDelete = async (id) => {
    const URL = `http://localhost:3000/books/${id}`;
    try {
      const { status, data } = await axios.delete(URL);
      if (status === 404 || status === 500) {
        console.error("Failed to delete book");
      } else {
        console.log("Successfully deleted", data);
        //update book locally if success
        const updatedBooks = books.filter((book) => book._id != id);
        setBooks(updatedBooks);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="app">
      <NavBar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Books
              books={books}
              onEdit={(id) => navigate(`/updateBook/${id}`)}
              onDelete={onDelete}
            />
          }
        />
        <Route path="/addBook" element={<AddBook onAdd={onAdd} />} />
        <Route
          path="/updateBook/:id"
          element={<UpdateBook onUpdate={onEdit} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
