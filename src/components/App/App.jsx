import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(236, 236, 236)',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        color: 'black',
      }}
    >
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id/*" element={<MovieDetails />}></Route>
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
