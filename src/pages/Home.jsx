import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    getTrending().then(data => setTrendMovies(data));
  }, []);

  return (
    <>
      <MoviesList movies={trendMovies} />
    </>
  );
};

export default Home;