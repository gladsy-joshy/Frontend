import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            Learn more about our story and how we strive to deliver the best
            products to our customers.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Customer Service</h3>
          <ul className="footer-list">
            <li>Contact Us</li>
            <li>Order Tracking</li>
            <li>Returns & Exchanges</li>
            <li>Shipping & Delivery</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
