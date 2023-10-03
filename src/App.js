import React from "react";
import "./styles/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/pages/Posts";
import About from "./components/pages/About";

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
      <div>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
