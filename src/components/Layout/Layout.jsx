import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Container, Header, Link } from './Layout.styled';
export const Layout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          <Link state={{ from: location }} to={'/movies/:movieId'} />
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
