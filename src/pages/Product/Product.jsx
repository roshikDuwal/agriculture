import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { getProductData } from "./api/useGetProduct";
import { Link } from "react-router-dom";
import "../../../assets/css/main.css";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Image_domain } from "../../../constants/Url";

const Product = () => {
  const myStyle = {
    backgroundImage: "url('assets/images/backgrounds/page-header-bg-1-1.jpg')",
  };

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
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

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

      <section className="blog-grid ">
        <div className="container">
          <div className="row">
            {loading ? (
              <>
                <Flex width="100%" align="center" justify="center">
                  {" "}
                  <Spinner
                    thickness="6px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    size="xl"
                  />
                </Flex>{" "}
              </>
            ) : (
              data?.data?.products.map((elem, index) => {
                return (
                  <div className="col-md-6 col-lg-4" key={elem.slug}>
                    <div className="blog-card">
                      <div className="blog-card__image">
                        <img
                          src={`${Image_domain}/${elem.image}`}
                          alt="Best Way to Do Eco and Agriculture"
                        />
                      </div>

                      <div className="blog-card__content">
                        <div className="blog-card__meta"></div>
                        <div className="blog-card__meta">
                          <a href="#">
                            <i className="far fa-user-circle"></i>
                            {elem.categories[0].title}
                          </a>
                        </div>
                        <h3>
                          <Link to={`/product/${elem.slug}`}>{elem.name}</Link>
                        </h3>
                        <Link to={`/product/${elem.slug}`} className="thm-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
