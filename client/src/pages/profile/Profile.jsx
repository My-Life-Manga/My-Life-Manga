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

  const {name, title, location, about, skills = [], education, experience = []} = user;

  return (
    <>
      <Navbar/>
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3"/>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{location}</p>
            <Button variant="primary" href="/profile/edit">
              Edit Profile
            </Button>
          </Col>
          <Col md={8}>
            <h4>About</h4>
            <p>{about}</p>
            <h4>Skills</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h4>Education</h4>
            <p>{education}</p>
            <h4>Experience</h4>
            {experience.map((job, index) => (
              <div key={index}>
                <h5>{job.title}</h5>
                <p>{job.company}</p>
                <p>
                  {job.startDate} - {job.endDate}
                </p>
                {job.responsibilities && (
                  <ul>
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
