// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./components/Navbar.module.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import MessageBoard from "./pages/MessageBoard";
import BookSuggestions from "./pages/BookSuggestions";
import BurnBook from "./pages/BurnBook";

function App() {
  return (
    // this is where Router will go
    <>
      <Navbar />
      <Home />
      <Login />
      <Calendar />
      <MessageBoard />
      <BookSuggestions />
      <BurnBook />
    </>
  );
}

export default App;
