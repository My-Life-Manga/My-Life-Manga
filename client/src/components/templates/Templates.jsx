import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./css/style.css";
import logo from "./img/logo.png";

const Template1A = () => {
  return (
    <div className="Template1A">
      <Container>
        <Row>
          <Col lg={6} className="Template1A__container-right"></Col>
          <Col lg={6} className="Template1A__container-left">
            <h3>Some sample heading here</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptate odit similique, sapiente voluptatibus atque nam, repellendus veniam, quas impedit voluptas nostrum est molestias officia deserunt aliquam! Voluptatum ducimus odit, quisquam nam molestiae enim hic alias qui reiciendis eos. Perferendis eaque sunt et porro ratione! Minus placeat voluptatem harum ullam?</p>
            <h3>Some sample heading here</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptate odit similique, sapiente voluptatibus atque nam, repellendus veniam, quas impedit voluptas nostrum est molestias officia deserunt aliquam! Voluptatum ducimus odit, quisquam nam molestiae enim hic alias qui reiciendis eos. Perferendis eaque sunt et porro ratione! Minus placeat voluptatem harum ullam?</p>
          </Col>
        </Row>
      </Container>
      <Image src={logo} alt="logo" height="350px" className="mb-3" />
    </div>
  );
};

const Template1B = () => {
  return (
    <>
      <div className="Template1B">
        <div className="Template1B__container-right">
          <img src={logo} alt="logo" height="350px" />
        </div>
        <div className="Template1B__container-left">
          <h3>Some sample heading here</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptate odit similique, sapiente voluptatibus atque nam, repellendus veniam, quas impedit voluptas nostrum est molestias officia deserunt aliquam! Voluptatum ducimus odit, quisquam nam molestiae enim hic alias qui reiciendis eos. Perferendis eaque sunt et porro ratione! Minus placeat voluptatem harum ullam?</p>
          <h3>Some sample heading here</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptate odit similique, sapiente voluptatibus atque nam, repellendus veniam, quas impedit voluptas nostrum est molestias officia deserunt aliquam! Voluptatum ducimus odit, quisquam nam molestiae enim hic alias qui reiciendis eos. Perferendis eaque sunt et porro ratione! Minus placeat voluptatem harum ullam?</p>
        </div>
      </div>
    </>
  );
};

const Template2A = () => {
  const Section = () => {
    return (
      <div className="Template2A__container">
        <img src={logo} alt="logo" height="200px" />
        <h3>Some Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quaerat explicabo nam vel voluptate veritatis optio eos excepturi voluptates aperiam!</p>
      </div>
    );
  };
  return (
    <>
      <div className="Template2A">
        <Section />
        <Section />
        <Section />
      </div>
    </>
  );
};

const Template2B = () => {
  const Section = () => {
    return (
      <>
        <div className="Template2B__container">
          <div className="Template2B__container-title">
            <img src={logo} alt="logo" height="50px" />
            <h3>Insert title here</h3>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam saepe doloribus sequi atque nihil libero recusandae voluptates est eligendi.</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="Template2B">
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
    </>
  );
};

const Template3A = () => {
  return (
    <>
      <div className="Template3A">
        <Image src={logo} alt="logo" height="200px" />
        <h3>Insert title here</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam saepe doloribus sequi atque nihil libero recusandae voluptates est eligendi.</p>
      </div>
    </>
  );
};

const Template4 = () => {
  const [showScrollBar, setShowScrollBar] = useState(false);

  const handleMouseEnter = () => {
    setShowScrollBar(true);
  };

  const handleMouseLeave = () => {
    setShowScrollBar(false);
  };

  const containerStyle = {
    opacity: showScrollBar ? "1" : "0.25",
    transition: "opacity 0.5s",
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Header</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet vitae placeat perferendis necessitatibus sequi amet explicabo illum illo deserunt.</p>
        </Col>
        <Col>
          <div className="image-gallery-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={containerStyle}>
            <div className="image-gallery" style={{ width: "780px" }}>
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
              <Image className="m-4" src={logo} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Templates = () => {
  return (
    <div className="Templates__">
      <h3 className="Templates__h3">Template 1A</h3>
      <Template1A />
      <h3 className="Templates__h3">Template 1B</h3>
      <Template1B />
      <h3 className="Templates__h3">Template 2A</h3>
      <Template2A />
      <h3 className="Templates__h3">Template 2B</h3>
      <Template2B />
      <h3 className="Templates__h3">Template 3A</h3>
      <Template3A />
      <h3 className="Templates__h3">Template 4</h3>
      <Template4 />

      <div className="Templates__footer"></div>
    </div>
  );
};

export default Templates;
