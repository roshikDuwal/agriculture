import React from 'react'
import ProductDetail from "../../assets/images/resources/blog-cta-1.png"

const Productlist = () => {
  return (
    <>
            <section className="gray-boxed-wrapper home-one__boxed" style={{marginTop:"1rem"}}>
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
                    Lorem ipsum is simply free text available. Aenean eu leo
                    quam. Pellentesque ornare sem lacinia quam venenatis
                    vestibulum. Aenean lacinia bibendum nulla sed consectetur.
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

          <div className="blog-home__slogan">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="blog-home__slogan-main">
                    <i className="agrikon-icon-farm"></i>
                    <div className="blog-home__slogan-content">
                      <h3>We Care About Our Agriculture Growth</h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered in some form,
                        by injected humour words.
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
          
        </section>
    </>
  )
}

export default Productlist