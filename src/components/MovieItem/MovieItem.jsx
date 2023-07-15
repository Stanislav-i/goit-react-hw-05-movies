import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

const PH_IMAGE =
  'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg';

const MovieItem = ({ id, title, poster }) => {
  const location = useLocation();

  return (
    //   <div className={css.trendingContainer}>
    <Link
      state={{ from: location }}
      className={css.trendingContainer}
      to={`/movies/${id}`}
    >
      <div className={css.imageThumb}>
        <img
          className={css.poster}
          src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : PH_IMAGE}
          alt="movie poster"
        />
      </div>
      <div className={css.title}>
        <li>{title}</li>
      </div>
    </Link>
    //   </div>
  );
};

export default MovieItem;
