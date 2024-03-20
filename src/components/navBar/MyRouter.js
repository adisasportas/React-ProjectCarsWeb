import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyRouter.css";

export default function MyRouter() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="left-side">
          <span className="current-time">{currentTime}</span>
        </div>
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
            <a href="/Cars" className="nav-link">Add Cars</a>
          </li>
          <li className="nav-item">
            <a href="/CarsSearch" className="nav-link">Search Car</a>
            </li>
            <li className="ConnectUs-nav-item">
            <a href="/ConnectUs" className="nav-link">Connect Us Car</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
