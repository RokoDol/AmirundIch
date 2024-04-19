import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginModule.css";

function LoginModule({ handleLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setErrorMessage("");
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
      setErrorMessage("Invalid username or password. Please try again.");
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
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div
                className={`input-box ${isUsernameFocused ? "focused" : ""}`}
              >
                <label
                  htmlFor="email"
                  id="labelcss"
                  onClick={() => setIsUsernameFocused(true)}
                >
                  Email Address
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={() => setIsUsernameFocused(false)}
                  id="email"
                  type="username"
                  placeholder="Your Account Username"
                  autoComplete="off"
                  required
                />
              </div>

              <div
                className={`input-box ${isPasswordFocused ? "focused" : ""}`}
              >
                <label
                  htmlFor="password"
                  id="labelcss"
                  onClick={() => setIsPasswordFocused(true)}
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setIsPasswordFocused(false)}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <div className="Forgot">
                  <a id="forgot">Click here if you forgot your password</a>
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
