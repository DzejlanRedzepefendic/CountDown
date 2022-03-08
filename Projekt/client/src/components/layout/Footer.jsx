import React from "react";
import "../../styles/Footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <section className="footer-base">
        <div className="footer-legal">
          <div className="footer-legal-copyright">
            Copyright © 2022 Vendor. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <Link className="footer-routes" to="/not-found">
              Privacy Policy
            </Link>
            <Link className="footer-routes" to="/not-found">
              Terms of Use
            </Link>
            <Link className="footer-routes" to="/not-found">
              Sales and Refunds
            </Link>
            <Link className="footer-routes" to="/not-found">
              Legal
            </Link>
            <Link className="footer-routes" to="/not-found">
              Site Map
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
