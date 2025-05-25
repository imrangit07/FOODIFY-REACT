import React from 'react';
import '../CSS/Footer.css'; 
import FooterLogo from '../../public//Images/Logos/FooterLogo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdDeliveryDining, MdPayment } from 'react-icons/md';
import { BsTelephoneFill, BsShieldLock } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <div className="logo-container">
            <img src={FooterLogo} alt="Foodify Logo" className="footer-logo" />
            {/* <h2>Foodify</h2> */}
          </div>
          <p>Delicious food delivered to your doorstep in minutes. Order your favorite meals from the best restaurants in town.</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Popular Dishes</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Food Categories */}
        <div className="footer-section">
          <h3>Our Menu</h3>
          <ul>
            <li><a href="#">Burgers</a></li>
            <li><a href="#">Pizza</a></li>
            <li><a href="#">Biryani</a></li>
            <li><a href="#">Pasta</a></li>
          </ul>
        </div>

        {/* Contact & Info */}
        <div className="footer-section">
          <h3>Contact & Info</h3>
          <ul className="contact-info">
            <li><MdDeliveryDining /> Free delivery on orders above ₹199</li>
            <li><BsTelephoneFill /> +91 9876543210</li>
            <li><MdPayment /> Secure payment options</li>
            <li><BsShieldLock /> 100% secure checkout</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Foodify. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;