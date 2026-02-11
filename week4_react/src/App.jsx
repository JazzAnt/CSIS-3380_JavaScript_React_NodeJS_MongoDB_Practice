import { useState } from "react";
import "./App.css";
import { books as defaultBooks } from "./assets/bookService.js";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import BookList from "./components/bookList.jsx";

function App() {
  //useState returns 2 variables
  // #1 = variable as state
  // #2 = function used to update state
  // The useState func has 1 argument, which is the initial value of the state
  const [books, setBooks] = useState(defaultBooks);
  const deleteBook = (book_id) => {
    const updatedBooks = books.filter((book) => book._id !== book_id);
    setBooks(updatedBooks);
  };

  // Save stated in components is a bad idea as it's hard to track them
  // So have parent as the state holder

  return (
    <div className="app">
      <Header title="My Book Library" />
      <BookList books={books} deleteBook={deleteBook}/>
      <Footer />
    </div>
  );
}

export default App;
