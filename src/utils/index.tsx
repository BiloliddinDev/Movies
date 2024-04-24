import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 10000,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmZiYTFiYzYxZWE1M2UwNzRjNjU3ZTkwOTRiNDc5ZiIsInN1YiI6IjY2MjY2ZTM5YWY5NTkwMDE2NDY4YWNlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.npGZxpcnuAas60OIdKjPwY1JX6T5fUusS3iCFYVRZ1Y",
  },
});
