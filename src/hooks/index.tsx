import { useQuery } from "@tanstack/react-query";
import { instance } from "../utils";

type getTayp = {
  keys: string[];
  url: string;
  options?: any;
};

export const useGetData = ({ keys, url, options }: getTayp) => {
  return useQuery({
    queryKey: keys,
    queryFn: () => instance.get(url).then((res) => res?.data),
    ...options,
  });
};
export const useMoveData = ({ keys, url, options }: getTayp) => {
  return useQuery({
    queryKey: keys,
    queryFn: () => instance?.get(url)?.then((res) => res?.data?.results),
    ...options,
  });
};

import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return window.addEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
