import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../../layout/footers/FooterOne";
import BodyContent from "../../../components/pages/otherPages/aboutUs2";
import BreadCrumb2 from "../../../layout/Breadcrumb/BreadCrumb2";

const AboutUs2 = () => {
  return (
    <>
      <NavbarThree />
      <BreadCrumb2 />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default AboutUs2;
