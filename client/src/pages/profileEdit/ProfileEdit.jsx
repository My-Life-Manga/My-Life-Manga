import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

const ProfileEdit = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/profile`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Add code to handle form submission and update user data
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <p>Loading...</p>
      </>
    );
  }

  const { name, title, location, about} = user;

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <h1>Edit Profile</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={name} />
          </Form.Group>

          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" defaultValue={title} />
          </Form.Group>

          <Form.Group controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" defaultValue={location} />
          </Form.Group>

          <Form.Group controlId="formBasicAbout">
            <Form.Label>About</Form.Label>
            <Form.Control as="textarea" rows={3} defaultValue={about} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ProfileEdit;
