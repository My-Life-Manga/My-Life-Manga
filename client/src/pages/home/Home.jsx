import React, { useState } from "react";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import { Navbar, Footer } from "../../components/index";
import "./css/style.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="Home">
        <h1>Welcome to My life Manga</h1>
      </div>
      <Footer />
    </>
  );
}

export default Home;
