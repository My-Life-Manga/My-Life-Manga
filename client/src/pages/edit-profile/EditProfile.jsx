import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/edit`);
        const data = response.data;
        setName(data.name);
        setTitle(data.title);
        setLocation(data.location);
        setAbout(data.about);
        setSkills(data.skills);
        setEducation(data.education);
        setExperience(data.experience);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/profile/edit`, {
        name,
        title,
        location,
        about,
        skills,
        education,
        experience,
      });
      console.log(response.data);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Unable to update profile");
    }
  };

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <h2>Edit Profile</h2>
        {error && <p>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="about">
            <Form.Label>About</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter about" value={about} onChange={(e) => setAbout(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="skills">
            <Form.Label>Skills</Form.Label>
            <Form.Control type="text" placeholder="Enter skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value.split(","))} />
          </Form.Group>

          <Form.Group controlId="education">
            <Form.Label>Education</Form.Label>
            <Form.Control type="text" placeholder="Enter education" value={education} onChange={(e) => setEducation(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="experience">
            <Form.Label>Experience</Form.Label>
            {experience.map((exp, index) => (
              <div key={index}>
                <Form.Control
                  type="text"
                  placeholder="Enter job title"
                  value={exp.jobTitle}
                  onChange={(e) =>
                    setExperience((prevExperience) => {
                      const newExperience = [...prevExperience];
                      newExperience[index].jobTitle = e.target.value;
                      return newExperience;
                    })
                  }
                />
                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  value={exp.companyName}
                  onChange={(e) =>
                    setExperience((prevExperience) => {
                      const newExperience = [...prevExperience];
                      newExperience[index].companyName = e.target.value;
                      return newExperience;
                    })
                  }
                />
                <Form.Control
                  type="text"
                  placeholder="Enter dates employed"
                  value={exp.dates}
                  onChange={(e) =>
                    setExperience((prevExperience) => {
                      const newExperience = [...prevExperience];
                      newExperience[index].dates = e.target.value;
                      return newExperience;
                    })
                  }
                />
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter job description"
                  value={exp.description}
                  onChange={(e) =>
                    setExperience((prevExperience) => {
                      const newExperience = [...prevExperience];
                      newExperience[index].description = e.target.value;
                      return newExperience;
                    })
                  }
                />
                <Button variant="danger" onClick={() => setExperience((prevExperience) => prevExperience.filter((_, i) => i !== index))}>
                  Remove Experience
                </Button>
              </div>
            ))}
            <Button variant="primary" onClick={() => setExperience((prevExperience) => [...prevExperience, { jobTitle: "", companyName: "", dates: "", description: "" }])}>
              Add Experience
            </Button>
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditProfile;
