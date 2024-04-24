import { Carousel } from "antd";
import React from "react";
import { useMoveData } from "../../hooks";
import { motion } from "framer-motion";
import { Movie, MovieListResponse } from "../../types";

const Showcase = () => {
  const { data: carouselData }: MovieListResponse | any = useMoveData({
    keys: ["upcoming"],
    url: "movie/upcoming",
  });

  return (
    <div className="w-full">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        effect="fade"
        easing="linear"
        infinite
        fade
        dotPosition="bottom"
      >
        {carouselData?.map((movie: Movie) => (
          <div key={movie.id} className="relative">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[680px] object-cover object-center"
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt={movie?.original_title}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gradient-to-t from-black to-transparent p-8"
            >
              <h1 className="text-white text-6xl font-mono mb-6">
                {movie?.original_title}
              </h1>
              <p className="text-white text-2xl font-mono">{movie?.overview}</p>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Showcase;
