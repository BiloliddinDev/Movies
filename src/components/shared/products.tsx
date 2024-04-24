import React, { FC } from "react";
import { Card, Skeleton } from "antd";
import { useMoveData } from "../../hooks";
import { Link } from "react-router-dom";
import { Movie } from "../../types";
import Carousel from "./carusel";
import CaruselCard from "../Ui/CaruselCard";

const { Meta } = Card;

const Products: FC = () => {
  const { data: Movies, isLoading }: any = useMoveData({
    keys: ["now_playing"],
    url: "movie/now_playing",
  });

  return (
    <div id="Playing" className="container">
      <div className="mb-2">
        {isLoading ? (
          <Skeleton active />
        ) : (
          <Carousel
            title="Playing"
            data={Movies?.map((e: Movie) => (
              <Link to={`/detel/${e.id}`} key={e.id}>
                <CaruselCard
                  image={e?.backdrop_path}
                  title={e.title}
                  overview={e.overview}
                />
              </Link>
            ))}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
