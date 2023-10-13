import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const myStyle = {
    backgroundImage: "url('assets/images/backgrounds/page-header-bg-1-1.jpg')",
  };

  return (
    <>
      <section className="page-header">
        <div className="page-header__bg" style={myStyle}></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>/</li>
            <li>
              <span>Contact Us</span>
            </li>
          </ul>
          <h2>Contact</h2>
        </div>
      </section>

      <section className="contact-one">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div className="contact-one__content">
                <div className="block-title">
                  <div className="block-title__image"></div>
                  <p>Contact now</p>
                  <h3>Leave A Message</h3>
                </div>
                <div className="contact-one__summery">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua lonm andhn. Aenean tincidunt id mauris id
                    auctor. Donec at ligula lacus dignissim mi quis simply
                    neque.
                  </p>
                </div>
                <div className="contact-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8">
              <form
                action="assets/inc/sendemail.php"
                className="contact-one__form contact-form-validated"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="thm-btn">
                      Send a Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-infos">
        <div className="container">
          <div
            className="inner-container wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="row no-gutters">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="contact-infos__single">
                  <h3>About Company</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                    sit amet lectus neque.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="contact-infos__single">
                  <h3>Visit Company</h3>
                  <p>
                    66 broklyn golden street line, New York. United States of
                    America.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="contact-infos__single">
                  <h3>Call or Email</h3>
                  <p>
                    <a href="mailto:needhelp@company.com">
                      needhelp@company.com
                    </a>
                    <br />
                    <a href="mailto:info@company.com">info@company.com</a>
                    <br />
                    <a href="tel:666-888-0000">666 888 0000</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="google-map__home-two">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="map__home-two"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
