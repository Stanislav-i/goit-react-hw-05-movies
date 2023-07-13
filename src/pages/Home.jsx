import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { fetchTrendingData } from 'Services/api';
import TrandingMovieItem from 'components/TrandingMovieItem/TrandingMovieItem';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState('');
    
  useEffect(() => {
    

    const fetchTrendingMovies = async () => {
      try {
        await fetchTrendingData().then(data => {
          console.log(data)
          setTrendingMovies(data.results)
        });
      } catch (error) {
        console.log(error.message)
        setError(error.message);
      }
    }

    fetchTrendingMovies();
  }, []);
    // console.log(trendingMovies);

    return (
      <div>
        <h1
          style={{
            paddingTop: '25px',
            paddingBottom: '25px',
            paddingLeft: '40px',
            color: 'black',
          }}
        >
          Trending Today
        </h1>
        <ul>
          {error ? (
            <p>
              Something went wrong... Please, try again later.
              <br />
              Error is: {error}
            </p>
          ) : (
            trendingMovies.map(({ id, original_title, backdrop_path }) => (
              <TrandingMovieItem
                key={id}
                id={id}
                title={original_title}
                poster={backdrop_path}
              />
            ))
          )}
        </ul>
      </div>
    );
};

export default Home;
