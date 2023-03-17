import React from 'react';
import "./landing.scss"

const Landing = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="intro">
          <h1>MangaLife</h1>
            <br />
          <h2>A place for people with similar interests.</h2>
          <p>Welcome to our social media platform where you can showcase your life and connect with others. Share your photos and let others appreciate your talent. Get likes and comments from your friends and followers to feel the love. With our user-friendly interface, it's easy to upload your photos and interact with your followers. Join our community today and become a part of something special.</p>
          <a href="/login">
            <button>Join Us Now</button>
          </a>
          </div>
      </div>
    </div>
  );
}

export default Landing;
