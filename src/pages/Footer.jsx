import React from "react";
import footerimage1 from "../../assets/images/logo-light.png";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>

      <footer className="site-footer" >
        
        <div className="container" >
          <Flex flexWrap={'wrap'} >
            <Box flex={1} className=" footerbox">
              <div className="footer-widget " class>
                <a href="index.html" className="footer-widget__Logo">
                  <img src={footerimage1} width="153" alt="" style={{paddingBottom:"2rem"}} />
                </a>
                <p>
                  "Thank you for being a vital part of our farming
                  community—your trust fuels our commitment to cultivating a
                  prosperous future for all."
                </p>

                <div className="mc-form__response"></div>

                <div className="footer__social" style={{ paddingTop: "2rem" }}>
                  <a href="https://www.facebook.com/profile.php?id=100041323845763" target="__blank" className="fab fa-facebook-square"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-pinterest-p"></a>
                  <a href="#" className="fab fa-instagram"></a>
                </div>
              </div>
            </Box>

            <Box flex={1} className=" footerbox" >
              <div className="footer-widget footer-widget__links-widget">
                <h3 className="footer-widget__title">Links</h3>

                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Box>

        
            <Box flex={1} className=" footerbox" >
              <h3 className="footer-widget__title">Contact</h3>

              <ul className="list-unstyled footer-widget__contact">
                <li>
                  <i className="agrikon-icon-telephone"></i>
                  <a href="tel: 01-6613730"> 01-6613730</a>
                </li>
                <li>
                  <i className="agrikon-icon-email"></i>
                  <a href="mailto:duwalrandr@gmail.com">duwalrandr@gmail.com</a>
                </li>
                <li>
                  <i className="agrikon-icon-pin"></i>
                  <a href="#">Libali,Bhaktapur</a>
                </li>
              </ul>
            </Box>
          </Flex>
        </div>
      </footer>

      <div className="bottom-footer">
        <div className="container" style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
          <p>© Copyright {new Date().getFullYear()} by  <a href="https://www.dotsamsara.com/" target="__blank" style={{textDecoration:"underline"}} >Dot Samsara.com</a>  </p>
          {/* <div className="bottom-footer__links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div> */}
        </div>
      </div>

    </>
  );
};

export default Footer;
