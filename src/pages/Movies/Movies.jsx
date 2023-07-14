// import { NavLink } from "react-router-dom";
import css from './Movies.module.css'

const Movies = () => { 
return (
  <form className={css.form}>
          <input type="text" placeholder="Search movies" />
          <button type="submit">Search</button>
        </form>
)

}

export default Movies;