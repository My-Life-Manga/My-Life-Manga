import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./css/style.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [isPageScrollable, setIsPageScrollable] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setShowFooter(scrollPosition >= pageHeight);
    };

    const checkPageScrollable = () => {
      setIsPageScrollable(document.documentElement.clientHeight < document.documentElement.scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);
    checkPageScrollable();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${(showFooter || !isPageScrollable || (window.innerHeight >= document.documentElement.scrollHeight && isPageScrollable)) && "show"}`}>
      <Container>
        <Row>
          <Col md={6}>
            <p className="Footer__p">{currentYear} My Website</p>
          </Col>
          <Col md={6} className="Footer__links">
            <ul className="Footer__ul">
              <li className="Footer__li">
                <NavLink to="/terms">Terms of Use</NavLink>
              </li>
              <li className="Footer__li">
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
              <li className="Footer__li">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
