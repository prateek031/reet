import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../../layout/footers/FooterOne";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import PropertyCompare from "../../../components/pages/userPanel/compareproperty";

const CompareProperty = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <PropertyCompare />
      <FooterOne />
    </>
  );
};

export default CompareProperty;
