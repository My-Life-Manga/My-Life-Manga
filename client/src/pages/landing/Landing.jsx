import React from 'react';
import "./landing.scss"

const Landing = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="intro">
          <h1>Travel the world. <br />Explore new possibilities.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi ipsam neque nesciunt illum impedit animi inventore dignissimos a nobis odio saepe expedita, eos officia ab sequi libero delectus cumque.</p>
          <a href="/login">
            <button>Explore Now</button>
          </a>
          </div>
      </div>
    </div>
  );
}

export default Landing;
