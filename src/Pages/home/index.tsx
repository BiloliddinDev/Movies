import React, { FC } from "react";
import Showcase from "../../components/shared/showcase";
import Products from "../../components/shared/products";
import Popular from "../../components/shared/popular";
import Upcoming from "../../components/shared/upcoming";

const Home: FC = () => {
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
