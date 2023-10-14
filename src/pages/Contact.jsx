import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import AOS from "aos";
import "aos/dist/aos.css";

import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();

  const [state, handleSubmit] = useForm("xvojdboq");

  if (state.succeeded) {
    toast({
      title: "SEND sUCCESSFULLY",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  } else if (state.errors) {
    toast({
      title: "Error Found !!",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

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
                    "Share Your Voice, Cultivate Connection - Drop Your Thoughts
                    Here."
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
                onSubmit={handleSubmit}
                className="contact-one__form contact-form-validated"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      required
                      autoComplete="off"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      style={{ color: "red" }}
                      errors={state.errors}
                    />
                  </div>

                  <div className="col-lg-12">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write Message"
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="thm-btn"
                      disabled={state.submitting}
                    >
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3533.48101962821!2d85.4387418!3d27.6715242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb05a6697cb139%3A0xe358dc5e6db17b91!2sDuwal%20R%20%26%20R%20Enterprise%20(Tractor%20Suppliers)!5e0!3m2!1sen!2snp!4v1697299744709!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map__home-two"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
