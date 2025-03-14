// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/messages" element={<MessageBoard />} />
          <Route path="/suggestions" element={<BookSuggestions />} />
          <Route path="/burnbook" element={<BurnBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
