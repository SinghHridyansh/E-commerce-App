import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Login.css";
import Thrift from "./../Assets/Thrift-logo.gif";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      const newUser = {
        email,
        password,
      };
      setUser(newUser);
      setEmail("");
      setPassword("");
      setError("");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
    } else if (!user || email !== user.email || password !== user.password) {
      setError("Invalid email or password");
    } else {
      setError("");

      console.log("Email: ", email);
      console.log("Password: ", password);
      // navigate("/home");
      console.log("Login successful!");
    }
  };
  return (
    <div className="login-main">
      <div className="login-form">
        <div>
          <h1>Welcome back!</h1>
          <h3>It's great to have you back.</h3>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {!user ? (
            <form onSubmit={handleCreateAccount}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Create Account</button>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </div>
      <div className="login-side">
        <div>
          <img src={Thrift} alt=".." />
        </div>
        <div>
          <h3>Shop smart save big</h3>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
