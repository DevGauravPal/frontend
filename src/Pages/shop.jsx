import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offier/Offier";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewLetter from "../Components/NewsLetter/NewLetter";

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewLetter />
    </div>
  );
};

export default shop;
