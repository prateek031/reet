/**
 * It returns a div with a div inside it, which has an image, a heading, a subheading, and a button
 * @returns A div with a div inside of it.
 */
import Link from "next/link";
import React from "react";
import { KnowMore, WantToBuyOrRentHome } from "../../../../constValues/constValues";

const HomeSliderContent = ({ img, mainTitle }) => {
  return (
    <div>
      <div className="home-content">
        <div>
          <img src={img} className="img-fluid m-0" alt="" />
          <h6>{WantToBuyOrRentHome}</h6>
          <h1>{mainTitle}</h1>
          <Link href="aboutus" className="btn btn-gradient">
            {KnowMore}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSliderContent;
