import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Navbar, Footer } from "../../components";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
