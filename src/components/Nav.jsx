import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [sticky, setSticky] = useState(false);

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
          <div className="container" >
            <div className="topbar__left">
              <div className="topbar__social">
                <a href="#" className="fab fa-facebook-square"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-pinterest-p"></a>
                <a href="#" className="fab fa-instagram"></a>
              </div>

              <p>Welcome to Duwal R And R</p>
            </div>

            <div className="topbar__right">
              <a href="#">
                <i className="agrikon-icon-email"></i>duwalR&R@company.com
              </a>
              <a href="#">
                <i className="agrikon-icon-clock"></i>Sun - Fri 8:00 - 6:30,
                Saturday - CLOSED
              </a>
            </div>
          </div>
        </div>

        <nav className="main-menu" >
          <div className="container">
            <div className="logo-box">
              <a href="index.html" aria-label="logo image">
                <img src="assets/images/logo.png" width="153" alt="" />
              </a>
              <span className="fa fa-bars mobile-nav__toggler"></span>
            </div>

            <ul className="main-menu__list">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li >
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

              <a href="tel:92-666-888-0000" className="main-header__info-phone">
                <i className="agrikon-icon-phone-call"></i>
                <span className="main-header__info-phone-content">
                  <span className="main-header__info-phone-text">
                    Call Anytime
                  </span>
                  <span className="main-header__info-phone-title">
                    92 666 888 0000
                  </span>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
