import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ServiceImage1 from "../images/servicethree.jpg";
import ServiceImage2 from "../images/servicefour.jpg";

const ServiceList = () => {
  return (
    <>
      <section className="service-two">
        <div className="service-two__bottom-curv"></div>

        <div className="container">
          <div className="block-title text-center">
            <div className="block-title__image"></div>

            <p>Our Services list</p>
            <h3>What We’re Offering</h3>
          </div>
          <div className="row">
            <Flex
              wrap="wrap"
              gap="5"
              align="center"
              justify="center"
              width={"100%"}
            >
              <Card className="service-two__card" width="30rem" height="35rem">
                <CardBody p={0} height="100%">
                  <Box className="service-two__card-image" height="40%">
                    <Image src={ServiceImage1} alt="" />
                  </Box>
                  <Flex
                    height="60%"
                    direction="column"
                    className="service-two__card-content"
                  >
                    <div className="service-two__card-icon">
                      <i className="agrikon-icon-tractor"></i>
                    </div>

                    <h3>Agriculture equipments</h3>
                    <p>
                      "Agriculture equipment, ranging from plows to harvesters
                      and irrigation systems, revolutionizes farming by
                      maximizing efficiency, precision, and output, essential in
                      meeting the demands of a growing world population."
                    </p>
                  </Flex>
                </CardBody>
              </Card>

              <Card className="service-two__card" width="30rem" height="35rem">
                <CardBody p={0} height="100%">
                  <Box className="service-two__card-image" height="40%">
                    <Image src={ServiceImage2} alt="" />
                  </Box>
                  <Flex
                    height="60%"
                    direction="column"
                    className="service-two__card-content"
                  >
                    <div className="service-two__card-icon">
                      <i className="agrikon-icon-tractor"></i>
                    </div>

                    <h3 style={{ width: "100% !important" }}>Machine repair</h3>
                    <p>
                      "We specialize in expert machine repair, restoring your
                      equipment to peak performance and minimizing disruptions
                      to your operations."
                    </p>
                  </Flex>
                </CardBody>
              </Card>
            </Flex>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
