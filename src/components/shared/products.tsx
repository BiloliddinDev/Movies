import React from "react";
import { Card, Skeleton } from "antd";
import { useMoveData } from "../../hooks";
import { Link } from "react-router-dom";
import { Movie } from "../../types";
import Carousel from "./carusel";

const { Meta } = Card;

const Products = () => {
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
                <Card
                  className="bg-blue-900 text-white border-e mx-4 my-4"
                  hoverable
                  style={{ border: "none" }}
                  cover={
                    <img
                      alt="example"
                      src={`https://image.tmdb.org/t/p/original${e?.backdrop_path}`}
                    />
                  }
                >
                  <Meta
                    title={
                      <h2 className="text-2xl mb-2">{e?.original_title}</h2>
                    }
                    description={
                      <p className="text-lg text-gray-300">
                        {e?.overview?.slice(0, 100) + "..."}
                      </p>
                    }
                  />
                </Card>
              </Link>
            ))}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
