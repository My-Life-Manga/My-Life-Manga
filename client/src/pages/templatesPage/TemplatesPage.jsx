import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Templates from "../../components/templates/Templates";
import "./css/style.css";

const TemplatesPage = () => {
  return (
    <>
      <Navbar />
      <h1>Templates Page</h1>
      <Templates />
    </>
  );
};

export default TemplatesPage;
