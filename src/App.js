import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";
import Nav from "./components/UI/nav/nav";


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
