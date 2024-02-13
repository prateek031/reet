/* A component that is being imported. */
import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../../layout/footers/FooterOne";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";

const DynamicBodyContent = dynamic(() => import("../../../components/pages/portfolio/grid/index.js"), {
  ssr: false,
});
const GridTitle2 = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent title={true} size={6} />
      <FooterOne />
    </>
  );
};

export default GridTitle2;
