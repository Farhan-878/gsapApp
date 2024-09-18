import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-big-text">
          <span className="timeline-anim">FRONTEND</span>
        </div>
        <div className="copyright">
          <p>© 2024 ALL RIGHTS RESERVED</p>
          <div className="right">
            <a href="#" id="back-to-top">
              GO BACK TO TOP
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
