import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GridView from "../../../components/listing/gridView/grid/GridView";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../../layout/footers/FooterOne";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const RightContent = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb right={true} />
      <GridView side={"right"} size={2} gridType={"grid-view"} gridBar={true} />
      <FooterOne />
    </>
  );
};

export default RightContent;
