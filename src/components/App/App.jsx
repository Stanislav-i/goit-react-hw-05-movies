import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ProgressBar } from 'react-loader-spinner';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

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
        <Suspense
          fallback={
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#F4442E"
              barColor="#51E5FF"
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:id/*" element={<MovieDetails />}></Route>
          </Routes>
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
