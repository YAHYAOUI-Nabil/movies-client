import React, { useEffect, useState } from "react";
import Hero from "../hero/Hero";
import api from "../../api/axiosConfig";

const Home = () => {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <Hero movies={movies} />;
};

export default Home;
