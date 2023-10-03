import React from "react";
import "./styles/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";


function App() {
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
  ]);
 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
