import React, { useEffect, useState } from "react";
import Hero from "../hero/Hero";
import api from "../../api/axiosConfig";

const Home = () => {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
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
