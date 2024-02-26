import React from "react";
import { Col } from "reactstrap";

const FooterMap = ({ isActive, setIsActive }) => {
  return (
    <Col xl='3' md='6' className='order-xl'>
      <div className='footer-links'>
        <h5
          className='footer-title'
          onClick={(e) => {
            e.preventDefault();
            setIsActive("OurLocation");
            isActive === "OurLocation" && setIsActive();
          }}>
          Our Location
          <span className='according-menu'>
            <i className='fas fa-chevron-down'></i>
          </span>
        </h5>
        <div className={`footer-content ${isActive === "OurLocation" ? "d-block" : "d-none d-md-block"}`}>
          <div className='footer-map'>
            <iframe
              title='GRG office location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297.28086509414885!2d35.858710853552466!3d32.543528426343144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c77ca8e60b723%3A0xdc854ff43b229ad1!2zR2xvYmFsIFJlYWwgZXN0YXRlIEdyb3VwINmF2KzZhdmI2LnYqSDYutmE2YjYqNin2YQg2KfZhNi52YLYp9ix2Yo!5e0!3m2!1sen!2sin!4v1707140768278!5m2!1sen!2sin'
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FooterMap;
