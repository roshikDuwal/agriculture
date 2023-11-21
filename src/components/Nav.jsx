import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";

const Nav = () => {
  const [sticky, setSticky] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      if (show) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={sticky ? "nav-sticky" : "main-header"}>
        <div className={sticky ? "d-none" : "topbar"}>
          <div className="container">
            <div className="topbar__left">
              <div className="topbar__social">
                <a href="https://www.facebook.com/profile.php?id=100041323845763" target="__blank"  className="fab fa-facebook-square"></a>
             
                <a href="#" className="fab fa-instagram"></a>
              </div>

              <p>Welcome to Duwal R And R</p>
            </div>

            <div className="topbar__right">
              <a href="#">
                <i className="agrikon-icon-email"></i><a href="mailto:duwalrandr@gmail.com">duwalrandr@gmail.com</a> 
              </a>
              <a href="#">
                <i className="agrikon-icon-clock"></i>Sun - Fri 8:00 am - 6:30 pm,
                Saturday - 8:30 am - 2:00 pm
              </a>
            </div>
          </div>
        </div>

        <nav className="main-menu">
          <div className="container">
            <div className="logo-box">
              <Link to="/" aria-label="logo image">
                <img src={Logo} width="153" alt="" />
              </Link>
              <span
                className="fa fa-bars mobile-nav__toggler"
                ref={btnRef}
                onClick={onOpen}
              ></span>
            </div>

            <ul className="main-menu__list">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/service">Services</Link>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>

            <div className="main-header__info">
              {/* <a href="#" className="search-toggler main-header__search-btn">
                <i
                  className="agrikon-icon-magnifying-glass"
                  style={{ marginRight: "20px" }}
                ></i>
              </a> */}

              <a href="tel:01-6613730" className="main-header__info-phone">
                <i className="agrikon-icon-phone-call"></i>
                <span className="main-header__info-phone-content">
                  <span className="main-header__info-phone-text">
                    Call Anytime
                  </span>
                  <span className="main-header__info-phone-title">
                    01-6613730
                  </span>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/" aria-label="logo image">
              <img src={Logo} width="153" alt="" />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex direction="column" gap="3">
              <Link to="/" onClick={onClose}>
                HOME
              </Link>
              <Link to="/about" onClick={onClose}>
                ABOUT US
              </Link>
              <Link to="/service" onClick={onClose}>
                SERVICE
              </Link>
              <Link to="/products" onClick={onClose}>
                PRODUCTS
              </Link>
              <Link to="/contact" onClick={onClose}>
                CONTACT
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Nav;
