import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const urlData =
    "https://api.themoviedb.org/3/discover/movie?api_key=72a46907b39dcf8b2dd0323513a7d05d";

  const getData = async () => {
    try {
      const response = await axios.get(urlData);
      setMovieData(response.data.results);
      console.log(movieData);
    } catch (error) {
      console.error(error);
    }
  };
  // getData(); //* ilk datayı görmek için yazdık.
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <button type="submit" onClick={() => getData()}>
        Submit
      </button>
    </div>
  );
};

export default Main;
