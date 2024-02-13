/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns a React component.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../../layout/footers/FooterOne";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import GridView from "../../../components/listing/gridView/grid/GridView";

const Slider = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={false} size={3} listSize={2} gridType={"list-view"} gridBar={true} />
      <FooterOne />
    </>
  );
};

export default Slider;
