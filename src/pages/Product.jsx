import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  const myStyle = {
    backgroundImage: "url('assets/images/backgrounds/page-header-bg-1-1.jpg')",
  };

  useEffect(()=>{
    AOS.init({duration:1000})
    window.scrollTo(0,0)
  },[]);

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
              <span>Products</span>
            </li>
          </ul>

          <h2>Our Products</h2>
        </div>
      </section>

      <section className="blog-grid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-grid-1.jpg"
                    alt="Best Way to Do Eco and Agriculture"
                  />
                  <a href="blog-details.html"></a>
                </div>

                <div className="blog-card__content">
                  <div className="blog-card__meta"></div>
                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user-circle"></i> Machine
                    </a>
                  </div>
                  <h3>
                    <a href="blog-details.html">TRACTOR|| 120 Liter </a>
                  </h3>
                  <a href="blog-details.html" className="thm-btn">
                    Read More
                  </a>{" "}
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-grid-2.jpg"
                    alt="Leverage agile frameworks to provide"
                  />
                  <a href="blog-details.html"></a>
                </div>

                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user-circle"></i> Machine
                    </a>
                  </div>
                  <h3>
                    <a href="blog-details.html">TRACTOR|| 120 Liter </a>
                  </h3>

                  <a href="blog-details.html" className="thm-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-grid-3.jpg"
                    alt="Organically grow the holistic world view"
                  />
                  <a href="blog-details.html"></a>
                </div>

                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user-circle"></i> Machine
                    </a>
                  </div>
                  <h3>
                    <a href="blog-details.html">TRACTOR|| 120 Liter </a>
                  </h3>

                  <a href="blog-details.html" className="thm-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-grid-4.jpg"
                    alt="Bring to the table win-win survival"
                  />
                  <a href="blog-details.html"></a>
                </div>

                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user-circle"></i> Machine
                    </a>
                  </div>
                  <h3>
                    <a href="blog-details.html">TRACTOR|| 120 Liter </a>
                  </h3>

                  <a href="blog-details.html" className="thm-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-grid-5.jpg"
                    alt="At the end of the day, going forward"
                  />
                  <a href="blog-details.html"></a>
                </div>

                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user-circle"></i> Machine
                    </a>
                  </div>
                  <h3>
                    <a href="blog-details.html">TRACTOR|| 120 Liter </a>
                  </h3>

                  <a href="blog-details.html" className="thm-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img
                    src="assets/images/blog/blog-grid-6.jpg"
                    alt="User generated content in real-time"
                  />
                  <a href="blog-details.html"></a>
                </div>

                <div className="blog-card__content">
                

                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user-circle"></i> Machine
                    </a>
                  </div>
                  <h3>
                    <a href="blog-details.html">TRACTOR|| 120 Liter </a>
                  </h3>

                  <a href="blog-details.html" className="thm-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center more-btn__box">
            <a href="#" className="thm-btn">
              Load More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
