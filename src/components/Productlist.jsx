import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { getProductData } from "../pages/Product/api/useGetProduct";
import { Image_domain } from "../../constants/Url";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Productlist = () => {
  const [data, setData] = useState([]);

  const getproductdata = async () => {
    try {
      const getdata = await getProductData();
      setData(getdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproductdata();
  }, []);

  const customBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10, 
    },

    650: {
      slidesPerView: 2,
      spaceBetween: 20, //
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10, //
    },

    1250: {
      slidesPerView: 4,
      spaceBetween: 10, //
    },
    1550: {
      slidesPerView: 5,
      spaceBetween: 10, //
    },
  };

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <>
      <section
        // className="gray-boxed-wrapper home-one__boxed"
        style={{ marginTop: "1rem", padding: "0 2rem" }}
      >
        <img
          src="assets/images/icons/home-1-blog-bg.png"
          alt=""
          className="home-one__boxed-bg"
        />

        <section className="blog-home-two blog-home-one">
          <div className="container1">
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

            <div className="row" style={{ paddingLeft: "15px",marginTop:"15px"}}>
              <Swiper
                freeMode={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={customBreakpoints}
                modules={[FreeMode, Pagination, Autoplay]}
                
              >
                {data?.data?.products.map((elem, index) => {
                  return (
                    <SwiperSlide key={elem.slug} style={{display:"flex",alignItems:"center",justifyContent:"center" }}>
                      <div className="blog-card">
                        <div
                          className="blog-card__image"
                          style={{ height: "60%" }}
                        >
                          <img
                            style={{ objectFit: "contain", height: "100%" }}
                            src={`${Image_domain}/${elem.image}`}
                            alt="Best Way to Do Eco and Agriculture"
                          />
                        </div>

                        <div
                          className="blog-card__content"
                          style={{
                            height: "40%",
                            width: "100%",
                          }}
                        >
                          <div className="blog-card__meta">
                            <a href="#">
                              <i className="far fa-user-circle"></i>
                              {elem.categories[0].title}
                            </a>
                          </div>

                          <div>
                            <h3>
                              <Link to={`/product/${elem.slug}`}>
                                {elem.name}
                              </Link>
                            </h3>
                          </div>

                          <Flex width="100%" align="center">
                            <Link
                              to={`/product/${elem.slug}`}
                              className="thm-btn1"
                            >
                              Read More
                            </Link>
                          </Flex>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <hr />
          </div>
        </section>
      </section>
    </>
  );
};

export default Productlist;
