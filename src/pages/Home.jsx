import React, { useEffect } from "react";
import Image1 from "../../assets/images/main-slider/main-slider-1-2.jpg";
import Testimonial from "../components/Testimonial";
import Productlist from "../components/Productlist";
import ServiceList from "../components/ServiceList";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import "../css/video.scss";
import HomeVideo from "../../video/homevideo.mp4";

const sliderImage = {
  backgroundImage: 'url("assets/images/main-slider/main-slider-1-1.jpg")',
};

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <div className="preloader">
        <img
          className="preloader__image"
          width="55"
          src="assets/images/loader.png"
          alt=""
        />
      </div> */}

      {/* <section className="main-slider">
        <div className="swiper-container thm-swiper__slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image-layer" style={sliderImage}></div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-7">
                    <span className="tagline">Welcome to Agriculture Farm</span>
                    <h2>
                      <span>Agriculture</span> <br />& Eco Farming
                    </h2>
                    <p>
                      There are many of passages of lorem Ipsum, but the majori
                      have <br />
                      suffered alteration in some form.
                    </p>
                    <a href="#" className="thm-btn">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <i className="agrikon-icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <i className="agrikon-icon-right-arrow"></i>
            </div>
          </div>
        </div>
      </section> */}

      <div className="section5">
        <video
          loop
          muted
          autoPlay="autoplay"
          playsInline
          className="back-video"
        >
          <source className="source" src={HomeVideo} type="video/mp4" />
        </video>

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-12">
                <span className="tagline">Welcome to Duwal R And R </span>
                <h2>
                  <span>Agriculture</span> <br />& Eco Farming
                </h2>
                <p>
                  There are many of passages of lorem Ipsum, but the majori have{" "}
                  <br />
                  suffered alteration in some form.
                </p>
                <a href="#" className="thm-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-one" style={{ paddingTop: "1px !important" }}>
        <img
          src="assets/images/icons/about-bg-icon-1-1.png"
          className="about-one__bg-shape-1"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-one__images">
                <img src="assets/images/resources/about-1-1.jpg" alt="" />
                <div
                  className="about-one__count wow fadeInLeft"
                  data-wow-duration="1500ms"
                >
                  <span>Trusted by</span>
                  <h4>80</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-7" style={{ margin: "0px !important" }}>
              <div className="about-one__content">
                <div className="block-title text-left">
                  <div className="block-title__image"></div>

                  <p>Welcome</p>
                  <h3>Better Agriculture for Better Future</h3>
                </div>
                <div className="about-one__tagline">
                  <p>We have 20 years of experience</p>
                </div>

                <div className="about-one__summery">
                  <p>
                    "Embrace a verdant future as we sow the seeds of prosperity,
                    cultivating success one tool at a time in our farm equipment
                    haven."
                  </p>
                </div>

                <div className="about-one__icon-row">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="about-one__box">
                        <i className="agrikon-icon-farmer"></i>
                        <h4>
                          <a href="about.html">Professional Farmers</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/about" className="thm-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Productlist />

      <section className="service-one">
        <div className="container"></div>
      </section>

      <ServiceList />

      <section
        className="call-to-action__three jarallax"
        data-jarallax
        data-speed="0.3"
      >
        <img
          className="call-to-action__three__bg jarallax-img"
          src="assets/images/backgrounds/cta-1-bg-1.jpg"
          alt="parallax-image"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="call-to-action__three-image">
                <img src="assets/images/resources/cta-3-1.jpg" alt="" />
                <img src="assets/images/resources/cta-3-2.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="call-to-action__three-content">
                <h3>Providing High Quality Products</h3>
                <a href="about.html" className="thm-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="contact-two">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5">
              <div className="contact-two__image">
                <div className="contact-two__image-bubble-1"></div>

                <div className="contact-two__image-bubble-2"></div>

                <div className="contact-two__image-bubble-3"></div>

                <Image
                  hideBelow="md"
                  src="assets/images/resources/contact-1-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
              <div className="contact-two__content">
                <div className="block-title">
                  <div className="block-title__image"></div>

                  <p>Contact now</p>
                  <h3>Leave Us A Message</h3>
                </div>

                <div className="contact-two__summery">
                  <p>
                    "Share Your Voice, Cultivate Connection - Drop Your Thoughts
                    Here."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <form
                action="assets/inc/sendemail.php"
                className="contact-one__form contact-form-validated"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>

                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Write Message"
                    ></textarea>
                  </div>

                  <div className="col-lg-12">
                    <button type="submit" className="thm-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="call-to-action jarallax"
        data-jarallax
        data-speed="0.3"
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

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Home;
