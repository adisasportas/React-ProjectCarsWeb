import React from 'react';
import '../screensCss/AboutMe.css'; // ייבוא קובץ ה-CSS

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <h2 className="about-me-heading">ABOUT ME</h2>
        <p className="about-me-paragraph">
          Welcome to my About Me page! I have always had a deep fascination with cars ever since I was a child. Growing up, I was surrounded by family members who were car enthusiasts, and that passion quickly rubbed off on me.
        </p>
        <p className="about-me-paragraph">
          For me, cars represent more than just a mode of transportation. They symbolize freedom, adventure, and craftsmanship. I love the thrill of driving, the sound of a powerful engine, and the feeling of control behind the wheel.
        </p>
        <p className="about-me-paragraph">
          My interest in cars extends beyond just driving. I enjoy learning about different makes and models, understanding their engineering, and staying up-to-date with the latest automotive technologies and trends.
        </p>
        <p className="about-me-paragraph">
          Whether it's attending car shows, tinkering with engines, or simply going for a long drive on a scenic route, cars have always been a significant part of my life and continue to be a source of joy and inspiration for me.
        </p>
      </div>
    </div>
  );
}
