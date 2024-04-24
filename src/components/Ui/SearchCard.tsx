import { Card } from "antd";
import React, { FC } from "react";
import { cardInterface } from "../../types";

const SearchCard: FC<cardInterface> = ({ image, title }) => {
  return (
    <Card
      className="bg-blue-900 text-white border-e mx-[10px] h-[300px]"
      hoverable
      style={{ border: "none" }}
      cover={
        <img
          width="100%"
          className="h-[200px] object-cover"
          alt="example"
          src={`https://image.tmdb.org/t/p/original${image}`}
        />
      }
    >
      <div>
        <h2 className="text-2xl mb-2">
          <span className="text-red-600">Title</span> : {title}
        </h2>
      </div>
    </Card>
  );
};

export default SearchCard;
