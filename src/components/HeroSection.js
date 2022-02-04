import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="hero-img" src="/images/img-mural-2.jpg" />
      <h1>Delicious Food</h1>
      <p>Exceptional Service</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link className="btn" to="/menu">
            Menu
          </Link>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <Link className="btnv" to="/about">
            See The Robots <i className="far fa-play-circle" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
