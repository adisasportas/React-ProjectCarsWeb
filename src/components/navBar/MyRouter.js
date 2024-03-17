import React from "react";
import  { Outlet, Link } from "react-router-dom";
import "./MyRouter.css";
export default function MyRouter() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home Page</a>
          </li>
          <li className="nav-item">
            <a href="/AboutMe" className="nav-link">About Me</a>
          </li>
          <Link to="/">
          <img src="https://cdn.pixabay.com/photo/2023/12/19/18/14/icon-8458165_1280.jpg" alt="Site Logo" style={{ width: '100px', height: 'auto' }} />
          </Link>
          <li className="nav-item">
            <a href="/CarsPage" className="nav-link">Cars Page</a>
            </li>
          <li className="nav-item">
            <a href="/AddCar" className="nav-link">Add Car</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};