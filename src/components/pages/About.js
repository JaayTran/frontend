import React from "react";
import "../../App.css";

export default function About() {
  return (
    <>
      <h1 className="about">About Us</h1>;
      <div className="about-card">
        <img
          height="300px"
          src="/images/img-seafood-party.jpg"
        />
        <div className="about-desc">
          <h2 className="about-desc-h">Our Story & Mission</h2>
          <br />
          <p>
            Robot Boil House started from an idea to serve great food in Toronto
            in a fun environment for families & communities to enjoy food that
            is deeply rooted in our Asian culture.
          </p>
          <br />
          <p>
            Today, nothing's changed, and we hope to continue telling our story
            and providing you with an unforgettable experience. Ultimately,
            Robot Boil House "boils down" to three things:
          </p>
          <br />
          <p>
            Culture -- All of our food, experiences & stories are inspired from
            our rich Asian culture.
          </p>
          <br />
          <p>
            Community -- We believe that communities are meant to be empowered,
            well-fed and never underserved!
          </p>
          <br />
          <p>Damn Good Food -- We like to eat well. You will too. :)</p>
        </div>
      </div>
    </>
  );
}
