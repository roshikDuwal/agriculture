import React, { useEffect, useState } from "react";
import { GetSingleProduct } from "./api/useGetSingleProduct";
import { useParams } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { Image_domain } from "../../../../constants/Url";
import { Spinner } from "@chakra-ui/react";
import "../../../../assets/css/main.css";

const Singleproduct = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getproductdata = async () => {
    setLoading(true);
    try {
      const getdata = await GetSingleProduct(id);
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
      {loading ? (
        <>
          {" "}
          <Spinner />
        </>
      ) : (
        <>
          {data?.data?.products && (
            <>
              <section className="blog-details">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div
                        className="blog-details__image"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: " center",
                        }}
                      >
                        <img
                          src={`${Image_domain}/${data?.data?.products?.image}`}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="blog-card__content">
                        <div className="blog-card__meta">
                          <a href="#">
                            <i className="far fa-user-circle"></i> {data?.data?.products?.categories[0].title}
                          </a>
                        </div>

                        <h2 className="product-title">{data?.data?.products?.name}</h2>
                        <h4 className="singleproductdescription">
                          Description
                        </h4>
                      </div>

                      <div className="blog-details__content singledescription">
                        <p>
                        {data?.data?.products?.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details__meta col-xl-12">
                    <div className="blog-details__tags">
                      <span>DETAILS</span>
                    </div>

                    <div className="blog-details__social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>

                  <div className="blog-author">
                    <div style={{ width: "100%" }}>
                      <table className="content-table">
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th>PARAMETERS</th>
                            <th>SPECIFICATION</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Brand Name</td>
                            <td>BKT KISHAN</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Model</td>
                            <td>BKT Kishan 170F, 900, Minitiller</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Transmission</td>
                            <td>Belt type Transmission</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Gear Shift</td>
                            <td>-1,0,1,2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Singleproduct;
