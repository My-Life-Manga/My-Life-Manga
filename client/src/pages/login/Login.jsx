import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Navbar, Footer } from "../../components";
import axios from "axios";
import logo from "../../components/templates/img/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const [, setAuthToken] = useCookies(["authToken"]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/login`, {
        username,
        password,
      });
      console.log(response);
      if (response.data.message === "Authenticated") {
        setAuthToken("authToken", response.data.token);
        history.push("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.log(error);
      setError("Server error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-md-center mt-5">
          <div className="col-md-6">
            <h2>Login</h2>
            <LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} onSubmit={handleLogin} error={error} />
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-md-end">
            <img src={logo} alt="logo" height="300px"></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const LoginForm = ({ username, password, setUsername, setPassword, onSubmit, error }) => {
  return (
    <form onSubmit={onSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
