import { Card, Skeleton } from "antd";
import { useMoveData } from "../../hooks";
import Meta from "antd/es/card/Meta";
import { useSearch } from "../../zuztand";
import CaruselApp from "./carusel";
import { Link } from "react-router-dom";
import Carousel from "./carusel";
import { Movie, MovieListResponse } from "../../types";
import CaruselCard from "../Ui/CaruselCard";
import { FC } from "react";

const Upcoming: FC = () => {
  const { data: Movies, isLoading }: MovieListResponse | any = useMoveData({
    keys: ["Upcoming"],
    url: "movie/upcoming?language=en-US&page=2",
  });

  return (
    <div id="Upcoming" className="container">
      <div className="mb-2">
        {isLoading ? (
          <Skeleton active />
        ) : (
          <Carousel
            title="Upcoming Movies"
            data={Movies.map((e: Movie) => (
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

export default Upcoming;
