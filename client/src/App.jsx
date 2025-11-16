import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";

import Enter from "./pages/Enter";
import Library_shelves from "./pages/Library_shelves";
import Author from "./pages/Author_Details/Author";
import ChatbotWrapper from "./pages/chatbot/chatBotWrapper";
import About from "./pages/About";
import Help from "./pages/Help";
import GenrePage from "./pages/Library_shelves";
import AdminLogin from "./pages/AdminLogin";
import ReaderLogin from "./pages/ReaderLogin";
import AuthorLogin from "./pages/AuthorLogin";
import ReaderRegister from "./pages/ReaderRegister";
import AuthorRegister from "./pages/AuthorRegister";
import GenreBooks from "./pages/GenreBooks";
import BookRequest from "./pages/BookRequest";
import Contact from './pages/Contact';

function App() {
  const [setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/authorregister" element={<AuthorRegister />} />
        <Route path="/readerregister" element={<ReaderRegister />} />
        <Route path="/shelves" element={<Library_shelves />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/BookRequest" element={<BookRequest />} />

        <Route
          path="/readerlogin"
          element={<ReaderLogin setUser={setUser} />}
        />
        <Route
          path="/authorlogin"
          element={<AuthorLogin setUser={setUser} />}
        />
        <Route path='/author' element ={<Author />} /> 
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/genre/:subGenre" element={<GenreBooks />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <ChatbotWrapper />
    </Router>
  );
}

export default App;