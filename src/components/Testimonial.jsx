import { Avatar, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Image_domain } from "../../constants/Url";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { getProductData } from "../pages/Product/api/useGetProduct";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getproductdata = async () => {
    setLoading(true);
    try {
      const getdata = await getProductData();
      setData(getdata);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getproductdata();
  }, []);

  console.log(data?.data?.testimonial);

  return (
    <>
      <section className="testimonials-one">
        <img
          height="50px"
          src="assets/images/icons/testimonials-bg-1-1.png"
          className="testimonials-one__bg"
          alt=""
        />

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {data?.data?.testimonial?.map((elem, index) => {
            return (
              <SwiperSlide key={elem.id}>
                <div className="container">
                  <h2 className="testimonials-one__title">Testimonials</h2>

                  <div
                    id="testimonials-one__carousel"
                    className="testimonials-one__carousel swiper-container"
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonials-one__icons">
                          {[...Array(parseInt(elem.star, 6))].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                        </div>

                        <p>{elem.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonials-one__image">
                          <Flex align="center" justify="center">
                            <Avatar
                              width="5rem"
                              height="5rem"
                              name={elem.name}
                              src={`${Image_domain}/${elem.image}`}
                            />
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
                          <h4>{elem.name}</h4>
                          <span>{elem.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="swiper-pagination"
                    id="testimonials-one__swiper-pagination"
                  ></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
