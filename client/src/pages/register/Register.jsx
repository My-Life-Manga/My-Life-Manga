import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import logo from "../../components/templates/img/logo.png";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/register`, {
        username,
        email,
        password,
      });
      console.log(response);
      if (response.status === 201) {
        history.push("/login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.log(error);
      console.error("Registration failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="justify-content-md-start mt-5 row">
          <div className="col-md-6 col-12">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-md-end">
            <img src={logo} alt="logo" height="300px"></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
