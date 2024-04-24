import React, { useEffect, useState } from "react";
import { useGetData, useMoveData } from "../../hooks";
import { Link, useParams } from "react-router-dom";
import { Button, Collapse, message, Skeleton } from "antd";
import { MovieListResponse } from "../../types";

const { Panel } = Collapse;

const Detel = () => {
  const { id } = useParams();
  const {
    data: Detelpage,
    isLoading: detailLoading,
    isError,
    error,
  }: MovieListResponse | any = useGetData({
    keys: ["detel ", `${id}`],
    url: `movie/${id}`,
  });

  const { data: Comment, isLoading: commentLoading }: any = useMoveData({
    keys: ["koment"],
    url: `movie/${id}/reviews`,
  });

  if (isError) {
    message.error(`${error}`);
  }

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <Skeleton loading={detailLoading} active>
          <img
            className="w-full h-[500px] object-contain"
            src={`https://image.tmdb.org/t/p/w500${
              Detelpage?.poster_path
                ? Detelpage?.poster_path
                : Detelpage?.backdrop_path
            }`}
            alt=""
          />
          <div className="container text-center">
            <h1 className="text-6xl my-4 text-white">
              {Detelpage?.original_title}
            </h1>
            <p className="text-gray-600 text-2xl">{Detelpage?.overview}</p>
            <p className="mt-4 text-2xl text-white mb-6">
              {Detelpage?.release_date}
            </p>

            <div className="my-4">
              {Detelpage?.genres?.map((genre: any) => (
                <span
                  key={genre?.id}
                  className="inline-block bg-gray-200 rounded-full px-4 py-2 text-lg font-semibold text-gray-700 mr-2 mb-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <Link to={"/"}>
              <Button className="text-white" size="large">
                Home
              </Button>
            </Link>
          </div>
        </Skeleton>
      </div>
      <div className="container">
        <h2 className="text-3xl my-6 text-center text-white">
          Production Companies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Detelpage?.production_companies?.map((company: any) => (
            <div
              key={company.id}
              className="border border-gray-200 p-4 rounded-md flex flex-col items-center bg-gradient-to-b from-gray-800 to-transparent"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {company?.name}
              </h3>
              <img
                className="h-[200px] w-[200px] object-contain bg-slate-900"
                src={`https://image.tmdb.org/t/p/original${company?.logo_path}`}
                alt={company?.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="mt-4 text-center text-4xl text-white mb-5">Comments</h1>

        {Comment?.map((review: any) => (
          <div key={review.id} className="bg-blue-950 rounded shadow-md mb-4">
            <Collapse className="border-none">
              <Panel
                header={
                  <span className="text-white text-2xl">{review.author}</span>
                }
                key="1"
                className="border-none"
              >
                <p className="text-black text-base mb-4">{review.content}</p>
                <p className="text-gray-600 text-sm mb-2">
                  Rating: {review.rating}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Posted on: {new Date(review.created_at).toLocaleDateString()}
                </p>
                <a
                  href={review.url}
                  className="text-blue-500 text-sm hover:underline"
                >
                  Read More
                </a>
              </Panel>
            </Collapse>
          </div>
        ))}
      </div>
      {Comment?.length === 0 && (
        <h1 className="text-white text-center text-3xl">No comments found</h1>
      )}
    </div>
  );
};

export default Detel;
