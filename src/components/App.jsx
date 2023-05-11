import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from "./SharedLayout";
 
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import MoviesDetails from '../pages/MoviesDetails'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path='movies' element={<Movies/>} />
        <Route path='movies/:id' element={<MoviesDetails/>} />
      </Route>
    </Routes>
  );
};