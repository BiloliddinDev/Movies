import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, message } from "antd";
import Upcoming from "../../components/shared/upcoming";
import { instance } from "../../utils";
import { Movie } from "../../types";
import { useMoveData } from "../../hooks";
import SearchCard from "../../components/Ui/SearchCard";

const Search = () => {
  const { id } = useParams();

  const { data: search, isLoading }: any = useMoveData({
    keys: ["search", `${id}`],
    url: `search/movie?query=${id}`,
  });

  return (
    <div>
      <h1 className="text-5xl text-white text-center pt-[80px] pb-7">
        Search Result
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-5">
        {search?.map((e: Movie) => (
          <Link key={e.id} to={`/detel/${e.id}`}>
            <SearchCard
              image={e.poster_path}
              overview={e.overview}
              title={e.title}
            />
          </Link>
        ))}
      </div>
      <Upcoming />
    </div>
  );
};

export default Search;
