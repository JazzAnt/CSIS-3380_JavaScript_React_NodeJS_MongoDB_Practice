import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//destructuring to import specific functions
//can rename functions with 'as' to avoid overlapping function names
import {log as helperLog} from './components/helper'
//importing default exports, no alias and no destructuring
import student from './components/helper'

import Header from "./components/header";
import Footer from "./components/footer";

import Players from "./components/players";

function App() {
  helperLog(student.name, student.course)

  //array containing player names as an argument
  const players = ["John", "Bob", "Charlie", "Egg", "Yam"]
  
  //return need to be enclosed in some element, usually <> </>
  //call your components with <Component/> like header below
  //use arguments to give the props parameter (see header.jsx)
  return (<>
    <Header title="Score Keeper App" subtitle="Track scores"/> 
    <Players players = {players}/>
    <Footer/>
  </>);
}

export default App;
