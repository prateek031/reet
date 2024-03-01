import { propertyData } from "../../public/API-Data/property";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  try {
  // const a = await prisma.featuredproperty.findMany();

  const a= [
    {
      city: "Explore",
      title: "Our Apartments",
      label: "",
      description:
        "Discover the epitome of luxury living with our exquisite selection of apartments. At GRG Global Group Real Estate, we understand the significance of finding the perfect home, and our portfolio is meticulously curated to exceed your expectations. Whether you're seeking a chic urban retreat or a serene suburban oasis, we have the ideal apartment waiting for you.",
      type: "Apartment",
      img: "/assets/images/property/apartment.jpg",
      imgLabel: "Luxurious Living",
      id: "4",
    },
    {
      city: "Explore",
      title: " Our Villas",
      label: "",
      description:
        "Embark on a journey of luxury living with our exclusive range of stunning villas. At GRG Global Group Real Estate, we excel in curating unparalleled villa experiences tailored to your desires. Whether you envision a contemporary haven nestled in nature, an elegant estate exuding timeless charm, or a coastal retreat offering panoramic views, we are dedicated to finding the perfect villa sanctuary to fulfill your lifestyle aspirations.",
      bed: 3,
      bath: 3,
      sqft: 1000,
      type: "FAMILY HOME",
      img: "/assets/images/property/villa.jpg",
      imgLabel: "Featured",
      id: "5",
    },
  ];
  const b = await prisma.featuredpropertyinclassiclayout.findMany();
  const c = await prisma.featuredpropertyincorporatelayout.findMany();
  const d = await prisma.findpropertiesinthesecities.findMany();
  const e = await prisma.latestforsalepropertydata.findMany();
  const f = await prisma.latestpropertydata.findMany();
  const g = await prisma.latestpropertyinclassiclayout.findMany();
  const h = await prisma.latestpropertylistinginenterprise.findMany();
  const i = await prisma.listingpropertyinclassiclayout.findMany();
  const j = await prisma.listingpropertyinmodernvideolayout.findMany();
  const k = await prisma.propertylisting.findMany();
  const l = await prisma.propertyoftheday.findMany();
  
  const Data =  {
    FeaturedProperty: a,
    FeaturedPropertyInClassicLayout: b,
    FeaturedPropertyInCorporateLayout: c,
    PropertiesInCities: d,
    LatestForSalePropertyData: e,
    LatestPropertyData: f,
    LatestPropertyInClassicLayout: g,
    LatestPropertyListingInEnterprise: h,
    ListingPropertyInClassicLayout: i,
    ListingPropertyInModernVideoLayout: j,
    PropertyListing: k,
    PropertyOfTheDay: l,
    "alalalalalalalala":"kikikikkiii0",
  };
  
    res.status(200).json(Data);
  } catch (err) {
    console.log(err.message);
    alert("Data is not fetch!!! Please check console!!!");
  }
}
