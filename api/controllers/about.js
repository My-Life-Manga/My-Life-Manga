import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    async function fetchTeamMembers() {
      const response = await axios.get('/api/team-members');
      setTeamMembers(response.data);
    }
    fetchTeamMembers();
  }, []);

  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member._id} className="col-md-4">
            <div className="card">
              <img src={member.pictureUrl} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;