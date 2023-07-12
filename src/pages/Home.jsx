import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    
    useEffect(() => {
      async function fetchTrendingMovies() {
        await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=58fde9f9a3392c3dbee86a1f2142354e'
        )
          .then(response => response.json())
          .then(movies => setTrendingMovies(movies.results));
      }

      fetchTrendingMovies();
    }, []);
    console.log(trendingMovies);

    return (
      <div>
        <ul>
          {trendingMovies &&
            trendingMovies.map(({ id, original_title }) => (
              <Link key={id} to={`/movies/${id}`}>
                <li>{original_title}</li>
              </Link>
            ))}
        </ul>
      </div>
    );
};

export default Home;
