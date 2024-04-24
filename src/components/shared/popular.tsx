import { Card, Skeleton } from "antd";
import { useMoveData } from "../../hooks";
import Meta from "antd/es/card/Meta";
import { useSearch } from "../../zuztand";
import CaruselApp from "./carusel";
import { Link } from "react-router-dom";
import Carousel from "./carusel";
import { Movie } from "../../types";

const Popular = () => {
  const { searchstate } = useSearch();

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

export default Popular;
