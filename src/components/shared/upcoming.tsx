import { Card, Skeleton } from "antd";
import { useMoveData } from "../../hooks";
import Meta from "antd/es/card/Meta";
import { useSearch } from "../../zuztand";
import CaruselApp from "./carusel";
import { Link } from "react-router-dom";
import Carousel from "./carusel";
import { Movie, MovieListResponse } from "../../types";

const Upcoming = () => {
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

export default Upcoming;
