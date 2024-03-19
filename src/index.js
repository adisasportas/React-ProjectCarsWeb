import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MyRouter from "./components/navBar/MyRouter";
import Footer from"./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/screens/HomePage";
import AboutMe from "./components/screens/AboutMe";
import Cars from "./components/screens/Cars";
import CarsSearch from "./components/screens/CarSearch";
import ConnectUs from"./components/screens/ConnectUs";
ReactDOM.render(
  <BrowserRouter>
  <MyRouter />
  <Footer />
    {/* Add array of routes, each route will tell which component to render
  in a certain path */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Cars" element={<Cars />} />
      <Route path="/ConnectUs" element={<ConnectUs />} />
      <Route path="/CarsSearch" element={<CarsSearch />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
