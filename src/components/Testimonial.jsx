import { Avatar, Flex } from "@chakra-ui/react";
import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="testimonials-one">
        <img height="50px"
          src="assets/images/icons/testimonials-bg-1-1.png"
          className="testimonials-one__bg"
          alt=""
        />
        <div className="container">
          <h2 className="testimonials-one__title">Testimonials</h2>
          <div
            id="testimonials-one__carousel"
            className="testimonials-one__carousel swiper-container"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonials-one__icons">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p>
                "Absolutely thrilled with the range of farming equipment at duwal R & R Enterprise. Their knowledgeable team guided me in selecting the perfect tools for my farm, resulting in a significant boost in productivity and yields." 
                </p>
              </div>
            </div>
          </div>

          <div  className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide" >
                <div className="testimonials-one__image">
                  <Flex align="center" justify="center">
                  <Avatar width="5rem" height="5rem" name='Dan Abrahmov' src='assets/images/resources/testimonials-1-1.jpg' />
                  </Flex>
                </div>
              </div>
            </div>
          </div>

          <div
            id="testimonials-one__meta"
            className="testimonials-one__carousel swiper-container"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonials-one__meta">
                  <h4>Kirishna Duwal</h4>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="swiper-pagination"
            id="testimonials-one__swiper-pagination"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
