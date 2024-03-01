/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import { AppPropertyData } from "../../../data/appPropertyData";
import AboutSection from "./About";
import BannerSection from "./Banner";
import BrandSection from "./Brand";
import CitiesWisePropertySection from "./CitiesWiseProperty";
import FeatureSection from "./Feature";
import HomeBannerSection from "./HomeBanner";
import OfferSection from "./Offer";
import PropertySection from "./Property";
import SalePropertySection from "./SaleProperty";
import TestimonialSection from "./Testimonial";
import ServiceSection from "../corporate/Service";
import AboutUsSection from "../corporate/About";
import PropertyServicesSection from "../classic/PropertyServices";




const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

 

  useEffect(() => { 
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);


  return (
    <>
      <HomeBannerSection />
      <ServiceSection value={AppPropertyData.ProvidedServices} />
      <AboutUsSection value={clientData?.OurAgentInCorporateLayout} />
      <SalePropertySection value={value?.LatestForSalePropertyData} />
      <PropertyServicesSection value={AppPropertyData.PropertyServicesInClassic} />
      <FeatureSection value={value?.FeaturedProperty} />
      <PropertySection value={value?.LatestPropertyData} />
      <OfferSection value={AppPropertyData.OurNewOffer} />
      <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} />
      <BannerSection />
      <AboutSection value={clientData?.MeetOurAgent} />
      <TestimonialSection value={clientData?.HappyClient} normal={true} />
      <BrandSection />
    </>
  );
};

export default BodyContent;
