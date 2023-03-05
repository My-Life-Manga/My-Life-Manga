import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";

function ErrorHandling() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          if (res.error === 1) {
            // setData((loginScreen))
          }
        }
      })
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
    </>
  );
}

export default ErrorHandling;