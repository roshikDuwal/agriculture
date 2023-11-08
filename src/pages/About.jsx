import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import AboutImage from "../images/About.jpg";
import Aboutimage1 from "../images/IMG.jpg";
import Aboutimage2 from "../images/abouttwo.jpg";
import Aboutimage3 from "../images/servicefour.jpg";
import Experienceimage from "../images/aboutfour.jpg";
import BACKGROUNDIMAGE from "../../assets/images/backgrounds/cta-1-bg-1.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const [showFullText, setShowFullText] = useState(false);
  const [showFullText1, setShowFullText1] = useState(false);

  const shortText =
    " Our Rigorous Quality Standards. At Duwal R and R, quality is our cornerstone. We meticulously... ";
  const fullText =
    "   Our Rigorous Quality Standards. At Duwal R and R, quality is our cornerstone. We meticulously select and maintain the highest standards in our agricultural machinery,guaranteeing durability, reliability, and top-tier performance in every piece of equipment we offer.";

  const shortText1 =
    "Revolutionizing Farming Practices for a Sustainable Future.Our commitment... ";
  const fullText1 =
    "  Revolutionizing Farming Practices for a Sustainable Future.Our commitment lies in offering innovative solutions and modern techniques that empower farmers.";

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const toggleFullText1 = () => {
    setShowFullText1(!showFullText1);
  };

  return (
    <>
      <section className="page-header">
        <div className="page-header__bg"></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              <span>About</span>
            </li>
          </ul>
          <h2>About Us</h2>
        </div>
      </section>

      <section className="team-one">
        <img
          src="assets/images/icons/team-bg-1-1.png"
          alt=""
          className="team-one__bg"
        />

        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "5rem",
          }}
        >
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12">
              <div className="team-one__content">
                <div className="block-title">
                  <div className="block-title__image"></div>

                  <h3>ABOUT DUWAL R AND R</h3>
                </div>
                <div className="team-one__summery">
                  <p className="block-text">
                    "Welcome to Duwal R & R enterprise, where passion meets
                    purpose in the heart of agriculture. Founded with a
                    deep-rooted love for farming and a commitment to empower
                    farmers, we strive to provide top-notch equipment and
                    expertise to help you nurture your land and cultivate
                    success. Our dedicated team shares your enthusiasm for
                    sustainable and fruitful farming, and we're here to support
                    your journey every step of the way. Together, let's sow the
                    seeds of a thriving tomorrow."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              width={"400px"}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "5px",
              }}
              src={AboutImage}
              alt="Jessica Brown"
            />
          </div>
        </div>
      </section>

      <section
        className="service-one service-one__about"
        style={{ padding: "0 20px" }}
      >
        <div>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="service-one__box">
                <img
                  style={{ height: "250px", objectFit: "cover" }}
                  src={Aboutimage1}
                  alt=""
                />
                <div className="service-one__box-content">
                  <h3>Agriculture Leader</h3>
                  <p className="block-text" style={{ padding: "0 10px" }}>
                    Guiding the Future of Agriculture with Innovative Solutions
                    and Expertise.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="service-one__box">
                <img
                  style={{ height: "250px", objectFit: "cover" }}
                  src={Aboutimage2}
                  alt=""
                />
                <div className="service-one__box-content">
                  <h3>Quality Standards</h3>
                  <p className="block-text" style={{ padding: "0 10px" }}>
                    {showFullText ? fullText : shortText}{" "}
                    <button
                      onClick={toggleFullText}
                      style={{ border: "1px solid grey !important" }}
                    >
                      {showFullText ? "Read Less" : "Read More"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="service-one__box">
                <img
                  style={{ height: "250px", objectFit: "cover" }}
                  src={Aboutimage3}
                  alt=""
                />
                <div className="service-one__box-content">
                  <h3>Sustainable Agriculture Solutions</h3>
                  <p className="block-text" style={{ padding: "0 10px" }}>
                    {showFullText1 ? fullText1 : shortText1}{" "}
                    <button
                      onClick={toggleFullText1}
                      style={{ border: "none !important" }}
                    >
                      {showFullText1 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-three">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-6">
              <div className="about-three__image">
                <img
                  style={{
                    width: "300px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                  src={Experienceimage}
                  alt=""
                />
              </div>
            </div>


            <div className="col-lg-6">
              <div className="about-three__content">
                <div className="block-title">
                  <div className="block-title__image"></div>
                  <p>Get to know us</p>
                  <h3>30 Years Agriculture Experience</h3>
                </div>
                <ul className="about-three__list list-unstyled">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Passion for Agriculture
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Experience and Dedication
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Solutions Over Products
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Innovation and Quality
                  </li>
                </ul>
                <div className="about-three__summery">
                  <p className="block-text">
                    We are more than just a machinery seller; we're a dedicated
                    partner in agricultural excellence. With years of experience
                    and a profound commitment to farming, our team is driven by
                    the vision of transforming agriculture. We believe in
                    offering not just equipment but solutions, personalized
                    advice, and dependable service. Discover the Duwal R and R
                    difference, where innovation meets tradition, and quality
                    is our hallmark.{" "}
                  </p>
                </div>
              </div>
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
          src={BACKGROUNDIMAGE}
          alt="parallax-image"
        />

        <div className="container">
          <div className="call-to-action__content">
            <i className="call-to-action__icon agrikon-icon-agriculture-2"></i>
            <h3>
              We’re popular leader in agriculture market in all over Nepal for
              machinery and tools
            </h3>
          </div>
          <div className="call-to-action__button">
            <Link to="/products" className="thm-btn">
              {" "}
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="team-one">
        <img
          src="assets/images/icons/team-bg-1-1.png"
          alt=""
          className="team-one__bg"
        />

        <div
          className="container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="team-one__content">
              <div className="block-title">
                <div className="block-title__image"></div>
                <p>meet the team</p>
                <h3>Expert Farmers</h3>
              </div>
              <div className="team-one__summery">
                <p className="block-text">
                  Lorem ipsum is simply free text available. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  Aenean lacinia bibendum.
                </p>
              </div>
              <div className="team-one__nav"></div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-6 col-xl-6"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div className="team-card">
              <div className="team-card__image">
                <img
                  className="teamsimage"
                  src="assets/images/team/team-1-1.jpg"
                  alt="Jessica Brown"
                />
                <div className="team-card__social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <h3>Jessica Brown</h3>
              <p>Farmer</p>
            </div>

            <div className="team-card">
              <div className="team-card__image">
                <img
                  className="teamsimage"
                  src="assets/images/team/team-1-1.jpg"
                  alt="Jessica Brown"
                />
                <div className="team-card__social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <h3>Jessica Brown</h3>
              <p>Farmer</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
