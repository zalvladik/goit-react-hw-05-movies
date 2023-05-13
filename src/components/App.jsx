import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from "./SharedLayout";
import { Suspense, lazy } from 'react';
import NotFound from '../pages/NotFound';

const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'))
const Cast = lazy(() => import('./Cast'))
const Reviews = lazy(() => import('./Reviews'))


export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path='movies' element={<Movies/>} />
          <Route path='movies/:movieID' element={<MoviesDetails/>}>
              <Route path='cast' element={<Cast/>} />
              <Route path='reviews' element={<Reviews/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};