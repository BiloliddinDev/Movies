import React from "react";
import Showcase from "../../components/shared/showcase";
import Products from "../../components/shared/products";
import Popular from "../../components/shared/popular";
import Upcoming from "../../components/shared/upcoming";

const Home = () => {
  return (
    <div>
      <Showcase />
      <Products />
      <Popular />
      <Upcoming />
    </div>
  );
};

export default Home;
