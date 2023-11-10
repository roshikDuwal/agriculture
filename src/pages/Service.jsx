import React, { useEffect } from "react";
import ServiceList from "../components/ServiceList";
import Serviceimage from "../images/aboutthree.jpg";

import AOS from "aos";
import "aos/dist/aos.css";


const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <section className="page-header">
        <div className="page-header__bg" ></div>

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
              <div className="feature-one__image" style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
                <img style={{width:"300px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}} src={Serviceimage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Service;
