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

  // console.log(data);

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
              <Flex gap="5" wrap="wrap" align="center" justify="center">
                {data?.data?.products.map((elem) => {
                  return (
                    <div className="blog-card" key={elem.slug}>
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

                        <Link to={`/product/${elem.slug}`} className="thm-btn1">
                          Read More
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </Flex>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
