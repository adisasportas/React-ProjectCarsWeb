import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MyRouter from "./components/navBar/MyRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/screens/HomePage";
import AboutMe from "./components/screens/AboutMe";
import Cars from "./components/screens/Cars";
import AddCar from "./components/screens/AddCar";

ReactDOM.render(
  <BrowserRouter>
  <MyRouter />
    {/* Add array of routes, each route will tell which component to render
  in a certain path */}
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/items" element={<Cars />} />
      <Route path="/contactus" element={<AddCar />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
