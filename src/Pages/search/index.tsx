import React, { useEffect, useState } from "react";
import { useMoveData } from "../../hooks";
import { Link, useParams } from "react-router-dom";
import { Card, message } from "antd";
import Upcoming from "../../components/shared/upcoming";
import { instance } from "../../utils";
import { Movie } from "../../types";

const Search = () => {
  const { id } = useParams();
  const [search, setSearch] = useState([]);

  useEffect(() => {
    instance
      .get(`search/movie?query=${id}`)
      .then((res) => setSearch(res?.data?.results))
      .catch((error) => {
        setSearch([]);
        message.error("Malumot topilmadi");
      });
  }, [id]);

  return (
    <div>
      <h1 className="text-5xl text-white text-center pt-[80px] pb-7">
        Search Result
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-5">
        {search?.map((e: Movie) => (
          <Link key={e.id} to={`/detail/${e.id}`}>
            <Card
              className="bg-blue-900 text-white border-e mx-[10px] h-[380px]"
              hoverable
              style={{ border: "none" }}
              cover={
                <img
                  width="100%"
                  className="h-[200px] object-cover"
                  alt="example"
                  src={`https://image.tmdb.org/t/p/original${e?.poster_path}`}
                />
              }
            >
              <div>
                <h2 className="text-2xl mb-2">{e?.original_title}</h2>
                <p className="text-1xl text-gray-300">
                  {e?.overview?.slice(0, 100)}...
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <Upcoming />
    </div>
  );
};

export default Search;
