import React from "react";
import {
  Navbar,
  Hero,
  Footer,
  Memory,
  Xplore,
  Advertise,
  Pricing,
  Banner,
  NewsLetter,
} from "./Components/index";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./Data/travigoData";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Xplore title="Explore The Beauty of World" placesApi={placesAPI} />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <NewsLetter />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
