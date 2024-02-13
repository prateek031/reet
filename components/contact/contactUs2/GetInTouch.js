/**
 * It returns a section with a container, which contains a row with two columns. The first column
 * contains the LogInCard component, and the second column contains a row with two columns. The first
 * column of the second row contains a div with a class of contact_wrap, and the second column of the
 * second row contains a div with a class of contact_wrap
 * @returns The return value is the value of the last expression evaluated in the function.
 */
import React from "react";
import { Mail, MapPin } from "react-feather";
import { Col, Container } from "reactstrap";
import LogInCard from "../contactUs1/LogInCard";

const GetInTouchSection = () => {
  return (
    <section className='small-section contact-2'>
      <Container>
        <div className='row gx-3'>
          <Col xl='6' lg='5'>
            <LogInCard />
          </Col>
          <Col xl='6' lg='7' className='contact_section contact_wrap_2'>
            <div className='row contact-detail theme-card'>
              <Col lg='12' className='p-0'>
                <div className='contact-content'>
                  <h2>Welcome to GRG !!</h2>
                  <p className='font-roboto'>
                  Global Real Estate Group is a real estate company whose main focus is on providing great service to its clients.
                  </p>
                </div>
              </Col>
              <Col sm='6' className=' p-0'>
                <div className='contact_wrap shadow-none text-start ps-0'>
                  <MapPin />
                  <h4>Where ?</h4>
                  <p className='font-roboto'>
                    Al Kader Center,<br />
                    Al Husen Street,<br />
                    Irbid, Jordan
                  </p>
                </div>
              </Col>
              <Col sm='6' className='p-0'>
                <div className='contact_wrap shadow-none text-start ps-0'>
                  <Mail />
                  <h4>Online service</h4>
                  <ul>
                    <li>Inquiries:-
                      <a href="mailto:info@grg-jo.com">info@grg-jo.com</a>
                       </li>
                    <li>Support:- 
                      
                      <a href="mailto: admin@grg-jo.com">
                      admin@grg-jo.com </a> </li>
                    <li>Phone No:
                      <a href="tel: +962 7 9613 6917">
                         
                       +962 7 9613 6917
                      </a>
                      </li>
                    <li>Phone No:
                      <a href="tel: +962 7 9098 9296">

                       +962 7 9098 9296
                      </a>
                      </li>
                  </ul>
                </div>
              </Col>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouchSection;
