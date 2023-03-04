import React, { useState } from "react";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import { Navbar, Footer } from "../../components/index";

function Home() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleLoadData = async () => {
    setLoading(true);
    setProgress(0);

    // Make 5 API calls with a delay in between
    for (let i = 0; i < 5; i++) {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      console.log(data); 
      setProgress(((i + 1) / 5) * 100); // Update progress bar after each API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    }

    setLoading(false);
    setProgress(100);
  };

  return (
    <>
      <Navbar />
      <div className="Home">
        <h1>Welcome to [website]</h1>
        <button onClick={handleLoadData}>Load Data</button>
        {loading && <ProgressBar progress={progress} />}
        <Footer />
      </div>
    </>
  );
}

export default Home;
