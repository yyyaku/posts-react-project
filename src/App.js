import React from "react";
import "./styles/App.css";
import { BrowserRouter, Link, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <div>
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
