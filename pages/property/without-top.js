/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props. The value of the props property is an object with a
 * property called locale. The value of the locale property is the locale that was passed to the
 * function.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/property/tabPanelPages";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarOne from "../../layout/headers/NavbarOne";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const WithoutTop = () => {
  return (
    <>
      <NavbarOne />
      <BodyContent imgSection={true} />
      <FooterOne />
    </>
  );
};

export default WithoutTop;
