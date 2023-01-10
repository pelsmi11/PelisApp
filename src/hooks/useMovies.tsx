import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMovies = async () => {
    setIsLoading(true);
    const {data} = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasEnCine(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
  };
};
