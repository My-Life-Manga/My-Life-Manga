import React, {useState, useEffect} from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

const Profile = () => {
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

  if (!user) {
    return (
      <>
        <Navbar/>
        <p>Loading...</p>
      </>
    );
  }

  const {name, location, about} = user;

  return (
    <>
      <Navbar/>
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3"/>
            <h3>{name}</h3>
            <p>{location}</p>
            <Button variant="primary" href="/profile/edit">
              Edit Profile
            </Button>
          </Col>
          <Col md={8}>
            <h4>About</h4>
            <p>{about}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
