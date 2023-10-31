import React, { useEffect } from "react";
import ServiceList from "../components/ServiceList";
import Serviceimage from "../../assets/images/resources/feature-1-1.jpg";
import Serviceimage2 from "../../assets/images/resources/cta-3-1.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Service = () => {
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
              <span>Services</span>
            </li>
          </ul>
          <h2>Our Services</h2>
        </div>
      </section>

      <ServiceList />

      <section className="feature-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-one__content">
                <div className="block-title">
                  <div className="block-title__image"></div>
                  <p>What we’re offering</p>
                  <h3>Better Agriculture for Better Future</h3>
                </div>
                <div className="feature-one__summery">
                  <p className="block-text">
                    We specialize in offering a diverse array of machinery
                    tailored to elevate agricultural practices. Our inventory
                    includes an extensive selection of high-performance
                    tractors, efficient harvesters, precision plows, effective
                    sprayers, and advanced planters. Each machine is carefully
                    curated to meet the specific needs of modern farming,
                    ensuring optimal productivity and efficiency
                  </p>
                </div>
                <ul className="list-unstyled feature-one__check-list">
                  <li>
                    <i className="agrikon-icon-tick"></i>
                    Cultivating Prosperity: Discover Our Array of Agricultural
                    Machinery
                  </li>
                  <li>
                    <i className="agrikon-icon-tick"></i>
                    Farming Fortified: Explore Our Diverse Agricultural
                    Machinery Lineup
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-one__image">
                <img src={Serviceimage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="col-lg-5">
              <div className="call-to-action__three-image">
                <img src={Serviceimage2} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="call-to-action__three-content">
                <h3>Providing High Quality Machinery</h3>
                <Link to="/products" className="thm-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
