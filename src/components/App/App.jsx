import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const Cast = lazy(() => import('.././Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Home = lazy(() => import('../../Pages/Home/Home'));
const MovieDetails = lazy(() =>
  import('../../Pages/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('../../Pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
