import React from 'react';
import "../screens-css/HomePage.css"; 

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
      <img src="https://cdn.pixabay.com/photo/2023/12/19/18/14/icon-8458165_1280.jpg" alt="Site Logo" style={{ width: '100px', height: 'auto' }} />
        <h1 className="title">Welcome to My Car App!</h1>
        <p className="description">Explore the world of cars with us.</p>
      </div>
    </div>
  );
};

export default HomePage;
