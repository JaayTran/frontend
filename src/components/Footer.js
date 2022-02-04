import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Robot Boil House
            </Link>
          </div>
          <div className="footer-subscription">
            <div className="footer-subscription">
              <p className="footer-subscription-heading">
                Check out our Social Media Pages!
              </p>
              <div class="social-icons">
                <Link
                  class="social-icon-link facebook"
                  to={{ pathname: "https://www.facebook.com/robotboilhouse/" }}
                  target="_blank"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i class="fab fa-facebook-f" />
                </Link>
                <Link
                  class="social-icon-link instagram"
                  to={{ pathname: "https://www.instagram.com/robotboilhouse/" }}
                  target="_blank"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i class="fab fa-instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <small class="website-rights">Robot Boil House © 2021</small>
      </section>
    </div>
  );
}

export default Footer;
