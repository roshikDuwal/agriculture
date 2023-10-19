import React from "react";

const Productlist = () => {
  return (
    <>
      <section
        className="gray-boxed-wrapper home-one__boxed"
        style={{ marginTop: "1rem" }}
      >
        <img
          src="assets/images/icons/home-1-blog-bg.png"
          alt=""
          className="home-one__boxed-bg"
        />
        
        <section className="blog-home-two blog-home-one">
          <div className="container">
            <div className="row top-row">
              <div className="col-lg-6">
                <div className="block-title">
                  <div className="block-title__image"></div>

                  <p>Our Best Products</p>
                  <h3>Popular Products for You</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="block-text">
                  Lorem ipsum is simply free text available. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  Aenean lacinia bibendum nulla sed consectetur.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="blog-card">
                  <div className="blog-card__image">
                    <img
                      src="assets/images/blog/blog-grid-1.jpg"
                      alt="Best Way to Do Eco and Agriculture"
                    />
                    <a href="blog-details.html"></a>
                  </div>

                  <div className="blog-card__content">
                    <div className="blog-card__meta">
                      <a href="blog-details.html">
                        <i className="far fa-user-circle"></i>Machine
                      </a>
                    </div>

                    <h3>
                      <a href="blog-details.html">
                        Best Way to Do Eco and Agriculture
                      </a>
                    </h3>
                    <a href="blog-details.html" className="thm-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-4">
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
                      <a href="blog-details.html">
                        <i className="far fa-user-circle"></i> Machine
                      </a>
                    </div>

                    <h3>
                      <a href="blog-details.html">
                        Leverage agile frameworks to provide
                      </a>
                    </h3>
                    <a href="blog-details.html" className="thm-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-4">
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
                      <a href="blog-details.html">
                        <i className="far fa-user-circle"></i> Machine
                      </a>
                    </div>

                    <h3>
                      <a href="blog-details.html">
                        Organically grow the holistic world view
                      </a>
                    </h3>
                    <a href="blog-details.html" className="thm-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>
        </section>

      </section>
    </>
  );
};

export default Productlist;
