import React from "react";
import { Container, Row } from "reactstrap";

const AboutUsSection = () => {
  return (
    <section className='about-main'>
      <Container>
        <Row>
          <div className='col'>
            <div className='title-2'>
              <h2>About Us</h2>
              <p className='font-roboto text-xl'>Global Real Estate Group is a real estate company whose main focus is on providing great service to its clients. They are able to provide all types of real estate services from home, Land, commercial properties, and prosperity appraisal, to Real estate investment. They have been in the business for more than 18 years, and they want to continue providing great service and making sure their client’s success is their success. <br></br> <br></br>

GRG is a company that mainly focuses on providing real estate services. Through many different branches that specialize in different aspects of real estate, including rent, purchase, real estate investment and real estate management in addition to surveying, evaluation and real estate valuation services. It also provides land and commercial real estate in addition to transaction services in government departments related to real estate. So it is the perfect place for anyone looking for real estate services</p>
            </div>
            {/* <div className='user-about'>
              <Row>
                <div className='col-xl-7 col-lg-5'>
                  <div className='about-image'>
                    <div className='img-box side-left'>
                      <img src='/assets/images/about/6.jpg' className='img-fluid' alt='' />
                      <div className='side-effect'></div>
                    </div>
                    <div className='img-box img-abs side-right'>
                      <img src='/assets/images/about/5.jpg' className='img-fluid' alt='' />
                      <div className='side-effect'></div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-5 col-lg-7'>
                  <div className='about-content'>
                    <h3>We are the expert of team communication</h3>
                    <p className='font-roboto'>
                      Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type{" "}
                    </p>
                  </div>
                  <div className='about-listing'>
                    <ul>
                      <li>
                        <h4>15,801</h4>
                        <p>Total property</p>
                      </li>
                      <li>
                        <h4>5792</h4>
                        <p>Agents</p>
                      </li>
                      <li>
                        <h4>3871</h4>
                        <p>Agency</p>
                      </li>
                      <li>
                        <h4>4791+</h4>
                        <p>Sold out property</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>
            </div> */}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
