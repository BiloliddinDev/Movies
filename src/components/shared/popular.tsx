import { Card, Skeleton } from "antd";
import { useMoveData } from "../../hooks";
import Meta from "antd/es/card/Meta";
import { useSearch } from "../../zuztand";
import CaruselApp from "./carusel";
import { Link } from "react-router-dom";
import Carousel from "./carusel";
import { Movie } from "../../types";
import CaruselCard from "../Ui/CaruselCard";

const Popular = () => {
  const { data: Movies, isLoading }: any = useMoveData({
    keys: ["top_rated"],
    url: "movie/now_playing?language=en-US&page=2",
  });

  return (
    <div id="Popular" className="container">
      <div className="mb-2">
        {isLoading ? (
          <Skeleton active />
        ) : (
          <Carousel
            title="Popular Movies"
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

export default Popular;
