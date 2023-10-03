import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./components/pages/Posts";
import About from "./components/pages/About";
import Nav from "./components/UI/nav/Nav";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/posts",
  //     element: <Posts />,
  //   },
  // ]);

  return (
      // <div>
      //   <Nav />
      //   <RouterProvider router={router} />
      // </div>
     <div>
      <Nav />
      <Router>
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
      </Router>
    </div>
  );
}

export default App;
