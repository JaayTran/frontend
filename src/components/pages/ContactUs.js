import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <h1 className="contact-us">Contact Us</h1>;
      <div className="contact-lr">
        <div className="contact-card">
          <div className="about-desc">
            <h2 className="about-desc-h">Want to get in touch?</h2>
            <br />
            <p>Send us a message on Facebook or Instagram!</p>
            <br />
            <div>
              <Link
                to={{ pathname: "https://www.facebook.com/robotboilhouse/" }}
                target="_blank"
                target="_blank"
                aria-label="Instagram"
              >
                <img height="200px" src="images/logo-fb.png" />
              </Link>

              <Link
                to={{ pathname: "https://www.instagram.com/robotboilhouse/" }}
                target="_blank"
                target="_blank"
                aria-label="Instagram"
              >
                <img height="200px" src="images/logo-insta.png" />
              </Link>
            </div>
            <p>
              895 Yonge St, Toronto, ON M4W 2H2 <br /> (416) 968-7888
            </p>
          </div>
        </div>

        <div className="contact-hours">
          <h2>Hours of Operation</h2>
          <p>Monday <br /> Noon - 10:30 PM</p>
          <br />
          <p>Tuesday <br /> Noon - 10:30 PM</p>
          <br />
          <p>Wednesday <br /> Noon - 10:30 PM</p>
          <br />
          <p>Thursday <br /> Noon - 10:30 PM</p>
          <br />
          <p>Friday <br /> Noon - 11 PM</p>
          <br />
          <p>Saturday <br /> Noon - 11 PM</p>
          <br />
          <p>Sunday <br /> Noon - 10 PM</p>
          <br />
          <p></p>
        </div>
        <div>
          <img className="img-contact" src="/images/img-map.png" />
        </div>
      </div>
    </>
  );
}
