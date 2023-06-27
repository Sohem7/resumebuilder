import React from 'react';
import './Home.module.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Resume Builder</h1>
      <p>Build your professional resume with ease.</p>
      <div>
        <h2>About the App</h2>
        <p className="description">
          Resume Builder is a user-friendly web application that helps you create
          impressive resumes in minutes. Our intuitive interface and pre-designed
          templates make it simple to showcase your skills, education, and work
          experience. Our app provides the tools you need to stand out in the
          competitive job market.
        </p>
      </div>
    </div>
  );
};

export default Home;
