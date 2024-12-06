import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to Face Recognition and Communication System</h1>
      <p>Please choose an option:</p>
      <div className="home-buttons">
        <button
          onClick={() => navigate("/login")}
          className="home-button officer-login"
        >
          Login as an Admin
        </button>
        <button
          onClick={() => navigate("/report")}
          className="home-button report-missing"
        >
          Report Missing Person/Item
        </button>
      </div>
    </div>
  );
};

export default HomePage;
