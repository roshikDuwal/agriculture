import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import AboutImage from "../../assets/images/team/team-1-1.jpg"
import Aboutimage1 from "../../assets/images/services/service-1-1.jpg"
import Aboutimage2 from "../../assets/images/services/service-1-2.jpg"
import Aboutimage3 from "../../assets/images/services/service-1-3.jpg"
import Experienceimage from "../../assets/images/resources/about-3-2.jpg"
import BACKGROUNDIMAGE from "../../assets/images/backgrounds/cta-1-bg-1.jpg"
import Mystyle from "../../assets/images/backgrounds/page-header-bg-1-1.jpg"

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="page-header" >
        <div className="page-header__bg" >
          <img src={Mystyle} alt="" />
        </div>

        <div className="container" >
          <ul className="thm-breadcrumb list-unstyled" >
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

        <div className="container" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:"5rem"}}>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12">
              <div className="team-one__content">
                <div className="block-title">
                  <div className="block-title__image"></div>
                  
                  <h3>ABOUT DUWAL R AND R</h3>
                </div>
                <div className="team-one__summery">
                  <p className="block-text">
                  "Welcome to Duwal R & R enterprise, where passion meets purpose in the heart of agriculture. Founded with a deep-rooted love for farming and a commitment to empower farmers, we strive to provide top-notch equipment and expertise to help you nurture your land and cultivate success. Our dedicated team shares your enthusiasm for sustainable and fruitful farming, and we're here to support your journey every step of the way. Together, let's sow the seeds of a thriving tomorrow."
                  </p>
                </div>

            
              </div>
              <div>
             
              </div>
            </div>
          </div>
          <div>
          <img src={AboutImage} alt="Jessica Brown"/>
          </div>
        </div>
      </section>

      <section className="service-one service-one__about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="service-one__box">
                <img src={Aboutimage1} alt="" />
                <div className="service-one__box-content">
                  <h3>
                    <a href="service-details.html">Agriculture Leader</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="service-one__box">
                <img src={Aboutimage2} alt="" />
                <div className="service-one__box-content">
                  <h3>
                    <a href="service-details.html">Quality Standards</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="service-one__box">
                <img src={Aboutimage3} alt="" />
                <div className="service-one__box-content">
                  <h3>
                    <a href="service-details.html">Organic Services</a>
                  </h3>
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
                <img src={Experienceimage} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three__content">
                <div className="block-title">
                  <div className="block-title__image"></div>
                  <p>Get to know us</p>
                  <h3>5 Years Agriculture Experience</h3>
                </div>
                <ul className="about-three__list list-unstyled">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Suspe ndisse suscipit sagittis
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    If you are going to a passage
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Entum estibulum dignissim
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Entum estibulum dignissim
                  </li>
                </ul>
                <div className="about-three__summery">
                  <p className="block-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    deiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Donec scelerisque dolor id nunc dictum, interdum.{" "}
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
            <h3>We’re popular leader in agriculture market globally</h3>
          </div>
          <div className="call-to-action__button">
            <a href="services.html" className="thm-btn">
              Discover More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
