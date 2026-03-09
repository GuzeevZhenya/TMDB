import { Route, Routes } from 'react-router'
import { Category } from '../../feature/category/ui/Category'
import { PageNotFound } from '../components/PageNotFoud/PageNotFound'
import { MainPage } from '../../feature/main/ui/MainPage/MainPage'
import { MoviesCategory } from '../../feature/category/ui/MoviesCategory/MoviesCategory'
import { Path } from '../constants/paths'
import { SearchPage } from '../../feature/search/ui/SearchPage'
import { Favourites } from '../../feature/favourites/ui/Favourites'
import { MovieDetails } from '../../feature/details/movieDetails'

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />

    <Route path="/movies/:moviesCategoryFilter" element={<Category />}>
      <Route index element={<MoviesCategory />} />
    </Route>

    <Route path={Path.MovieDetails} element={<MovieDetails />} />

    <Route path={Path.Search} element={<SearchPage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
    <Route path={Path.Favorites} element={<Favourites />} />
  </Routes>
)
