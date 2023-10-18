import React from "react";
import footerimage1 from "../../assets/images/logo-light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>

      <footer className="site-footer">
        
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-5">
              <div className="footer-widget">
                <a href="index.html" className="footer-widget__Logo">
                  <img src={footerimage1} width="153" alt="" />
                </a>
                <p>
                  "Thank you for being a vital part of our farming
                  community—your trust fuels our commitment to cultivating a
                  prosperous future for all."
                </p>

                <div className="mc-form__response"></div>

                <div className="footer__social" style={{ paddingTop: "2rem" }}>
                  <a href="#" className="fab fa-facebook-square"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-pinterest-p"></a>
                  <a href="#" className="fab fa-instagram"></a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-2">
              <div className="footer-widget footer-widget__links-widget">
                <h3 className="footer-widget__title">Links</h3>

                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

           

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-5">
              <h3 className="footer-widget__title">Contact</h3>

              <ul className="list-unstyled footer-widget__contact">
                <li>
                  <i className="agrikon-icon-telephone"></i>
                  <a href="tel:666-888-0000">666 888 0000</a>
                </li>
                <li>
                  <i className="agrikon-icon-email"></i>
                  <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                </li>
                <li>
                  <i className="agrikon-icon-pin"></i>
                  <a href="#">80 broklyn golden street line New York, USA</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottom-footer">
        <div className="container">
          <p>© Copyright 2020 by Company.com</p>
          <div className="bottom-footer__links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
