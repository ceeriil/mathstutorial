import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="social-box">
          <div class="logo">
            <h1>Maths with Mr SA</h1>
          </div>
          <div class="social text-gray">
            <Link to="/">
              <i class="fab fa-facebook-f"></i>
            </Link>
            <Link to="/">
              <i class="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i class="fab fa-twitter"></i>
            </Link>
            <Link to="/">
              <i class="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
        <div class="quick-links">
          <ul class="nav-items">
            <li class="nav-link">Quick Links</li>
            <li class="nav-link">
              <Link href="/">Topics & Worksheets</Link>
            </li>
            <li class="nav-link">
              <Link href="#">Videos</Link>
            </li>
            <li class="nav-link">
              <Link href="#">About Me</Link>
            </li>
            <li class="nav-link">
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div class="recents">
          <Link href="#" class="footer-box">
            <img
              src="https://mathswithmrsa.com/wp-content/uploads/2021/02/NAME-DIFFERENT-TYPES-OF-ANGLES-300x169.jpg"
              alt=""
            />
            <p>How to name different types of angles</p>
          </Link>
          <Link href="#" class="footer-box">
            <img
              src="https://mathswithmrsa.com/wp-content/uploads/2021/02/CLASSIFY-TRIANGLES-BY-SIDES-1024x576.jpg"
              alt=""
            />
            <p>How to classify triangles by sides</p>
          </Link>
          <Link href="#" class="footer-box">
            <img
              src="https://mathswithmrsa.com/wp-content/uploads/2021/02/HOW-TO-CLASSIFY-TRIANGLES-BY-ANGLES-300x169.jpg"
              alt=""
            />
            <p>How to classify triangles by angles</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
