import { NavLink } from "react-router-dom";
import css from './Header.module.css';

const Header = () => { 
    return (
      <header>
        <nav  className={css.container}>
          <div className={css.linkContainer}>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </div>
          <div className={css.linkContainer}>
            <NavLink className={css.link} to="/movies">
              Movies
            </NavLink>
          </div>
        </nav>
      </header>
    );
}

export default Header;
