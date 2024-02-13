/**
 * It returns a JSX element that contains two other components
 * @returns A React component
 */
import React from "react";
import GetInTouchSection from "./GetInTouch";

const BodyContent = () => {
  return (
    <>
      <GetInTouchSection />
      <div className='theme-card'>
                <div className='contact-bottom'>
                  <div className='contact-map'>
                    <iframe
                      title='contact location'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297.28086509414885!2d35.858710853552466!3d32.543528426343144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c77ca8e60b723%3A0xdc854ff43b229ad1!2zR2xvYmFsIFJlYWwgZXN0YXRlIEdyb3VwINmF2KzZhdmI2LnYqSDYutmE2YjYqNin2YQg2KfZhNi52YLYp9ix2Yo!5e0!3m2!1sen!2sin!4v1707140768278!5m2!1sen!2sin'
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
    </>
  );
};

export default BodyContent;
