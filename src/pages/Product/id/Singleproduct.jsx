import React, { useEffect, useState } from "react";
import { GetSingleProduct } from "./api/useGetSingleProduct";
import { useParams } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { Image_domain } from "../../../../constants/Url";
import { Flex, Spinner } from "@chakra-ui/react";
import "../../../../assets/css/main.css";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import HTMLReactParser from "html-react-parser";

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
          <Flex width="100%" height="70vh" align="center" justify="center">
            {" "}
            <Spinner
              thickness="6px"
              speed="0.65s"
              emptyColor="gray.200"
              size="xl"
            />
          </Flex>
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
                          width="50%"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="blog-card__content">
                        <div className="blog-card__meta">
                          <a href="#">
                            <i className="far fa-user-circle"></i>{" "}
                            {data?.data?.products?.categories[0].title}
                          </a>
                        </div>

                        <h2 className="product-title">
                          {data?.data?.products?.name}
                        </h2>
                        <h4 className="singleproductdescription">
                          Description
                        </h4>
                      </div>

                      <div className="blog-details__content singledescription">
                        <p>
                          {HTMLReactParser(data?.data?.products?.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {data?.data?.products?.features.length != 0 ? (
                    <>
                      {" "}
                      <div className="blog-details__meta col-xl-12">
                        <div className="blog-details__tags">
                          <span>DETAILS</span>
                        </div>
                      </div>
                    </>
                  ) : null}

                  {data?.data?.products?.features.length != 0 ? (
                    <>
                      <div className="blog-detail">
                        <div style={{ width: "100%" }}>
                          <Flex align="center" justify="center" width="100%">
                            <TableContainer
                              className="content-table"
                              width="70%"
                              border="2px"
                              borderColor={"blackAlpha.300"}
                            >
                              <Table
                                variant="striped"
                                colorScheme={"blackAlpha"}
                                size="lg"
                              >
                                <Thead>
                                  <Tr>
                                    <Th>S.N.</Th>
                                    <Th>PARAMETER</Th>
                                    <Th>SPECIFICATION</Th>
                                  </Tr>
                                </Thead>

                                <Tbody>
                                  {data?.data?.products?.features.map(
                                    (elem, index) => {
                                      return (
                                        <Tr
                                          key={index}
                                          style={{ fontSize: "14px" }}
                                        >
                                          <Td>{index + 1}</Td>
                                          <Td>{elem.parameters}</Td>
                                          <Td>{elem.specifications}</Td>
                                        </Tr>
                                      );
                                    }
                                  )}
                                </Tbody>
                              </Table>
                            </TableContainer>
                          </Flex>
                        </div>
                      </div>
                    </>
                  ) : null}
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
