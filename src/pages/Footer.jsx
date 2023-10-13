import React from "react";

const Footer = () => {
  return (
    <>
      <section
        className="call-to-action jarallax"
        data-jarallax
        data-speed="0.3"
        // data-imgPosition="-80% 50%"
      >
        <img
          className="call-to-action__bg jarallax-img"
          src="assets/images/backgrounds/cta-1-bg-1.jpg"
          alt="parallax-image"
        />

        <div className="container">
          <div className="call-to-action__content">
            <i className="call-to-action__icon agrikon-icon-agriculture-2"></i>
            <h3>We’re popular leader in agriculture market globally</h3>
          </div>
          <div className="call-to-action__button">
            <a href="services.html" className="thm-btn">
              Discover More
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <img
          src="assets/images/icons/footer-bg-icon-1.png"
          className="site-footer__shape-1"
          alt=""
        />
        <img
          src="assets/images/icons/footer-bg-icon-2.png"
          className="site-footer__shape-2"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <div className="footer-widget">
                <a href="index.html" className="footer-widget__Logo">
                  <img src="assets/images/logo-light.png" width="153" alt="" />
                </a>
                <p>
                "Thank you for being a vital part of our farming community—your trust fuels our commitment to cultivating a prosperous future for all."
                </p>
         

                <div className="mc-form__response"></div>

                <div className="footer__social" style={{paddingTop:"2rem"}}>
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
                    <a href="#">Our Projects</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">New Campaign</a>
                  </li>
                  <li>
                    <a href="#">Upcoming Events</a>
                  </li>
                  <li>
                    <a href="#">Volunteers</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="footer-widget">
                <h3 className="footer-widget__title">News</h3>
                <ul className="list-unstyled footer-widget__post">
                  <li>
                    <img
                      src="assets/images/resources/footer-post-1.png"
                      alt=""
                    />
                    <div className="footer-widget__post-content">
                      <span>Nov 16, 2020</span>
                      <h4>
                        <a href="blog-details.html">
                          How to grow vagetables in the forms
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <img
                      src="assets/images/resources/footer-post-2.png"
                      alt=""
                    />
                    <div className="footer-widget__post-content">
                      <span>Nov 16, 2020</span>
                      <h4>
                        <a href="blog-details.html">
                          How to grow vagetables in the forms
                        </a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
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
