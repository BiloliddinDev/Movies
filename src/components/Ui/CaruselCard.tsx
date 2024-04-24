import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { cardInterface } from "../../types";

const CaruselCard = ({ title, image, overview }: cardInterface) => {
  return (
    <Card
      className="bg-blue-900 text-white border-e mx-4 my-4"
      hoverable
      style={{ border: "none" }}
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/original${image}`}
        />
      }
    >
      <Meta
        title={<h2 className="text-2xl mb-2">{title}</h2>}
        description={
          <p className="text-lg text-gray-300">
            {overview?.slice(0, 100) + "..."}
          </p>
        }
      />
    </Card>
  );
};

export default CaruselCard;
