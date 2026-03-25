import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Books from "./components/books";

function App() {
  const [books, setBooks] = useState([]);

  /**
   * in React, when a page loads, this App() is re-run
   * So do not call fetchData() in here
   *
   * because fetchData() will prompt an UI update which will
   * rerun App() which will call fetchData() et cetera.
   * Thus it will create an infinite loop
   */

  //fetchData() <-- BAD

  /**
   * useEffect is used when a render needs to cause a side effect.
   * useEffect(setup, dependencies?)
   * - setup : runs this function whenever the app first renders
   *           and whenever a dependency changes
   *
   * - dependencies? : optional array of variables that will cause useEffect to trigger
   *                   if empty then setup will run only once
   *
   *  e.g. useEffect(() => {console.log("Hello World")}, [count, name])
   *      consolelog will trigger when app first loads and whenever the 'count' or
   *      'name' variable changes
   */

  // Here we use useEffect with no dependencies for fetchData
  // thus fetchData is called after the App first renders and never again
  useEffect(() => {
    const fetchData = async () => {
      const URL = `http://localhost:3000/books`;
      try {
        const { data } = await axios.get(URL);
        setBooks(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();

    //can also return a clean up function
    return () => {/** Clean up function (none here) */}
  });

  return (
  <div className="app">
    <Books books={books}/>
  </div>
  );
}

export default App;
