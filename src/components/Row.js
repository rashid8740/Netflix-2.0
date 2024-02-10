import React, { useEffect, useState } from "react";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);

      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="bg-black">
      <h1 className="text-white font-bold flex sticky ">{title}</h1>
      {/* movie */}
      <div className="flex overflow-y-hidden overflow-x-scroll ">
        {movies.map((movie) => (
          <img
            className=" w-full max-w-[100px] object-contain ml-1 mr-2"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
