import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { fetchSearchedData } from 'Services/api';
import MovieItem from 'components/MovieItem/MovieItem';
import css from './Movies.module.css';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [falseSearch, setFalseSearch] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();

    const searchQuery = e.target.elements.searchInput.value;

    setSearchParams({
      query: searchQuery,
    });

    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!movieName) return;

    const fetchSearchedMovies = async () => {
      try {
        setIsLoading(true);
        await fetchSearchedData(movieName).then(data => {
          if (data.results.length === 0) {
            setSearchedMovies([]);
            setFalseSearch(true);
            return;
          }
          setFalseSearch(false);
          setSearchedMovies(data.results);
        });
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchedMovies();
  }, [movieName, falseSearch]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="searchInput"
          placeholder="Search movies"
          required
          minLength={3}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>

      {isLoading && (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      )}

      {falseSearch && <p>There are no movies matching your request!</p>}

      <ul>
        {error ? (
          <p>
            Something went wrong... Please, try again later.
            <br />
            Error is: {error}
          </p>
        ) : (
          searchedMovies.map(({ id, title, backdrop_path }) => (
            <MovieItem key={id} id={id} title={title} poster={backdrop_path} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Movies;
