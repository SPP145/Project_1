import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="homepage">
      {/* Navbar */}
     <nav className="navbar">
     <h1 className="logo">Study Planner</h1>
     <ul className="menu">
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/">Log In</Link></li>
       <li><Link to="/signup">Sign Up</Link></li>
  </ul>
    </nav>


      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h2>Plan Your Study Schedule</h2>
          <p>Organize and track your reading progress with ease</p>
          <button className="btn">Get Started</button>
        </div>

        <div className="hero-illustration">
          <div className="calendar">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className={`cell ${i === 12 ? "highlight" : ""}`}
              />
            ))}
          </div>
          <div className="books">
            <div className="book yellow"></div>
            <div className="book blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
