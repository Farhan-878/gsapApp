import React, { useEffect, useRef } from "react";
import "./style.css";
import gsap from "gsap";
import logo from "../../assets/logo.svg";

const Header = () => {
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        duration: 1,
        scale: 0.5,
        ease: "elastic.out(0.5, 0.5)",
      },
      {
        opacity: 1,
        scale: 1,
        ease: "elastic.out(0.5, 0.5)",
        delay: 1.5,
      }
    );
    gsap.fromTo(
      navLinksRef.current,
      {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 2,
      },
      {
        opacity: 1,
        ease: "elastic.out(0.5, 0.5)",
        stagger: 0.2,
        delay: 2.5,
      }
    );
    gsap.fromTo(
      ".navbar-nav",
      {
        opacity: 0,
        delay: 2,
        duration: 1,
        ease: "elastic.out(0.5, 0.5)",
      },
      {
        opacity: 1,
        delay: 2,
        duration: 1,
        ease: "elastic.out(0.5, 0.5)",
      }
    );
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <a className="logo" href="#" ref={logoRef}>
          <img src={logo} alt="logo" />
        </a>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                ref={(el) => (navLinksRef.current[0] = el)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (navLinksRef.current[1] = el)}
              >
                Works
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (navLinksRef.current[2] = el)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (navLinksRef.current[3] = el)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Topnav and button */}
        {/* <div className="topnav d-flex align-items-center">
          <a
            href="https://uithemez.com/i/hubfolio_HTML/inner_pages/contact.html"
            className="butn butn-rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="d-flex align-items-center">
              <span>Start Project</span>
              <span className="icon ml-10">
                <img
                  src="https://uithemez.com/i/hubfolio_HTML/common/imgs/icons/arrow-top-right.svg"
                  alt="arrow"
                />
              </span>
            </div>
          </a>

          <div className="menu-icon cursor-pointer">
            <span className="icon ti-align-right"></span>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
