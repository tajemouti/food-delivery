import { assets } from '../../assets/assets';
import './footer.css';

const Footer = () => (
  <div className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-content-left">
        <img src={assets.logo} alt="logo" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolores laboriosam,
          provident animi vitae eum illum deleniti assumenda quis quibusdam sint inventore sit,
          ut repudiandae deserunt. Illum, nisi earum? Soluta?
        </p>
        <div className="footer-social-icons">
          <img src={assets.facebookIcon} alt="facebook" />
          <img src={assets.twitterIcon} alt="twitter" />
          <img src={assets.linkedinIcon} alt="linkedin" />
        </div>
      </div>
      <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+212-617-708-648</li>
          <li>contact@tomato.com</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="footer-copyright">
      Copyright 2024 @ Tomato.com - All Right Reserved.
    </p>
  </div>
);

export default Footer;
