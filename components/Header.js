import React, { useState, useEffect } from "react";
import NProgress from "nprogress";
import Router from "next/router";
import Link from "next/link";
Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const [mobileMenu, setMobileMenu] = useState(true);

  const menuTrigger = () => {
    setMobileMenu(!mobileMenu);
  };
  const showMenu = {
    display: "block",
  };
  const hidemenu = {
    display: "none",
  };

  return (
    <React.Fragment>
      {/* <div id="preloader">
        <div id="loader" className="spinner">
          <div id="shadow"></div>
          <div id="box"></div>
        </div>
      </div> */}
      <header
        className={
          scrollState === "top" ? "header-area " : "header-area header-sticky"
        }
        style={{
          background:
            scrollState === "top" ? "rgba(0,0,0,0)" : "rgba(255,255,255,1)",
          color: scrollState === "top" ? "white" : "black",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                
                <Link href="/">
                <a  className="logo">
                  <img
                    src="/static/assets/images/logo5.png"
                    alt="Redcoral Logo"
                  />
                </a>
                    </Link>
                <ul
                  className="nav"
                  style={mobileMenu === true ? hidemenu : showMenu}
                >
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
                <a className="menu-trigger" onClick={menuTrigger}>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
