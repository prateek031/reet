/**
 * It takes in an array of objects and returns a Slider component with a bunch of divs inside it
 * @returns The return value is the value of the last expression evaluated inside the function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { CEOofDesees, docuts, WhatPeopleSay } from "../../../constValues/constValues";
import { testimonial1 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";

const TestimonialSection = ({ value }) => {
  const customCubicBezier = "cubic-bezier(0.25, 0.1, 0.25, 1)";

  return (
    <section className="testimonial-style-1">
      <Container>
        <Row>
          <Col>
            <div className="title-2">
              <h2>{WhatPeopleSay}</h2>
              <p>{docuts}</p>
            </div>
            <div className="slick-between">
              <NoSsr>
                <Slider className="testimonial-1 dot-gradient" {...testimonial1} autoplay={true} 
  autoplaySpeed={2000}  easing={customCubicBezier}>
                  {value &&
                    value.map((data, i) => (
                      <div key={i}>
                        <div className="pepole-comment">
                          <div className="client-msg">
                            <span className="quote">
                              <img src="/assets/images/testimonial/quote.png" alt="" />
                            </span>
                            <p>{data.details}</p>
                          </div>
                          <div className="media">
                            <img src={data.img} alt="" />
                            <div className="media-body">
                              <h3>{data.name}</h3>
                              <span>{data.ocp}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Slider>
              </NoSsr>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;
