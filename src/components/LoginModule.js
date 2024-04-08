import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginModule.css";

function LoginModule({ handleLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    closeModal();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      console.log("Login successful!");
      handleLogin();
      navigate("/LoggedIn");
    } else {
      console.error("Login failed: Invalid username or password");
    }
  };
  return (
    <>
      <button id="customerbtn" onClick={openModal}>
        Customer Login
      </button>
      {isOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="module-content" onClick={handleContentClick}>
            <form onSubmit={handleLoginSubmit}>
              <p id="Loginheader">Login</p>
              <div className="input-box">
                <label htmlFor="email" id="labelcss">
                  Email Address
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="email"
                  type="username"
                  placeholder="Your Account Username"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="input-box">
                <label htmlFor="password" id="labelcss">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <div className="Forgot">
                  <a href="">Click here if you forgot your password</a>
                </div>
                <button id="loginbtn" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModule;
