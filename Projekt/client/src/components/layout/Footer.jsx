import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <section class="footer-base">
        <div class="footer-legal">
          <div class="footer-legal-copyright">
            Copyright © 2022 Vendor. All rights reserved.
          </div>
          <div class="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
