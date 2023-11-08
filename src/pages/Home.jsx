import React, { useEffect } from "react";
import Testimonial from "../components/Testimonial";
import Productlist from "../components/Productlist";
import ServiceList from "../components/ServiceList";
import { Link } from "react-router-dom";
import "../css/video.scss";
import HomeVideo from "../../video/homevideo.mp4";
import HighQuality from "../images/IMG.jpg";
import BackgroundImage from "../../assets/images/backgrounds/cta-1-bg-1.jpg";
import ProductDetail from "../../assets/images/resources/blog-cta-1.png";
import AboutImage from "../../assets/images/icons/about-bg-icon-1-1.png";
import Infobg from "../../assets/images/backgrounds/cta-1-bg-1.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
                <h2>Agriculture & Eco Farming</h2>
                <p
                  style={{
                    lineHeight: "2.5rem",
                    fontWeight: "900 !important",
                    fontSize: "1.5rem",
                  }}
                >
                  " कृषि यन्त्रहरूको नवाजटिको आधार। हामी उच्च गुणस्तरको
                  यन्त्रहरू र अनपेक्षित सेवासँग तपाईंको कृषि अभ्यासलाई
                  साधारण गर्न यहाँ छौं।"
                </p>
                <Link to="/about" className="thm-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-one" style={{ paddingTop: "1px !important" }}>
        <img src={AboutImage} className="about-one__bg-shape-1" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ margin: "0px !important" }}>
              <div className="about-one__content">
                <div className="block-title text-left">
                  <div className="block-title__image"></div>

                  <p>Welcome</p>
                  <h3>Better Agriculture for Better Future</h3>
                </div>
                <div className="about-one__tagline">
                  <p>We have 30 years of experience</p>
                </div>

                <div className="about-one__summery">
                  <p>
                    "Embrace a verdant future as we sow the seeds of prosperity,
                    cultivating success one tool at a time in our farm equipment
                    haven."
                  </p>
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

      <div className="blog-home__slogan">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog-home__slogan-main">
                <i className="agrikon-icon-farm"></i>
                <div className="blog-home__slogan-content">
                  <h3>We Care About Our Agriculture Growth</h3>
                  <p className="block-text">
                    "Here at Duwal R and R, agriculture is our passion. We
                    deeply care about the farming community, striving to provide
                    top-quality machinery that revolutionizes agricultural
                    practices. Our commitment extends beyond machines; we're
                    dedicated to empowering farmers with reliable equipment,
                    ensuring efficiency, productivity, and a sustainable future
                    for agriculture."
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="blog-home__slogan-image">
                <img src={ProductDetail} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
          src={Infobg}
          alt="parallax-image"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="call-to-action__three-image" >
                <img style={{height:"20%",width:"100%"}} src={HighQuality} alt="" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="call-to-action__three-content">
                <h3>Providing High Quality Machinary</h3>
                <Link to="/products" className="thm-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section
        className="call-to-action jarallax"
        data-jarallax
        data-speed="0.3"
        style={{ marginTop: "20rem" }}
      >
        <img
          className="call-to-action__bg jarallax-img"
          src={BackgroundImage}
          alt="parallax-image"
        />

        <div className="container">
          <div className="call-to-action__content">
            <i className="call-to-action__icon agrikon-icon-agriculture-2"></i>
            <h3>
              {" "}
              We’re popular leader in agriculture market in all over Nepal for
              machinery and tools
            </h3>
          </div>
          <div className="call-to-action__button">
            <Link to="/products" className="thm-btn">
              Discover More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
