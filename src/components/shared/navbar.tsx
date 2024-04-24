import React, { FC, useEffect } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { useSearch } from "../../zuztand";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { searchvalue, searchstate } = useSearch();

  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    searchvalue(value);
    navigate(`/search/${value}`);
  };

  // search
  return (
    <div className="p-2 shadow-xl fixed z-50 w-full">
      <div className="container flex items-center justify-between flex-col gap-4 md:flex-row">
        <a className="flex gap-2 items-center" href="/">
          <img
            className="bg-white rounded-full"
            width={50}
            src="../../../public/image/logo.png"
            alt=""
          />
          <p className="text-5xl text-white font-mono">Movies</p>
        </a>
        <div>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
        <div className="gap-5 hidden md:flex ">
          <a className="text-2xl text-white" href="#Home">
            Home
          </a>
          <a className="text-2xl text-white" href="#Playing">
            Now Playing
          </a>
          <a className="text-2xl text-white" href="#Popular">
            Popular
          </a>
          <a className="text-2xl text-white" href="#Upcoming">
            Upcoming
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
