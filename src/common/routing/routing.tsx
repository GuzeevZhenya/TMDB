import { Route, Routes } from 'react-router'
import { Category } from '../../feature/category/ui/Category'
import { PageNotFound } from '../components/PageNotFoud/PageNotFound'
import { MainPage } from '../../feature/main/ui/MainPage/MainPage'
import { MoviesCategory } from '../components/MoviesCategory/MoviesCategory'
import { Path } from '../constants/paths'
import { SearchPage } from '../../feature/search/ui/SearchPage'

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />

    {/* Вложенные маршруты для категорий */}
    <Route path={Path.CategoryMovies} element={<Category />}>
      {/* Это будет отображаться внутри Category при переходе на /movies/popular и т.д. */}
      <Route path=":moviesCategoryFilter" element={<MoviesCategory />} />
    </Route>

    <Route path={Path.Search} element={<SearchPage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)



// import { Route, Routes } from 'react-router'
// import { Category } from '../../feature/category/ui/Category'
// import { PageNotFound } from '../components/PageNotFoud/PageNotFound'
// import { MainPage } from '../../feature/main/ui/MainPage/MainPage'
// import { MoviesCategory } from '../components/MoviesCategory/MoviesCategory'
// import { Path } from '../constants/paths'
// import { SearchMovies } from '../../feature/main/ui/SearchMovies/SearchMovies'
// import { SearchPage } from '../../feature/search/ui/SearchPage'
// // Импортируй остальные страницы, когда они будут созданы
// // import { Main } from '../../feature/main/ui/Main'
// // import { FilteredMovies } from '../../feature/filteredMovies/ui/FilteredMovies'
// // import { Search } from '../../feature/search/ui/Search'
// // import { Favorites } from '../../feature/favorites/ui/Favorites'

// export const Routing = () => (
//   <Routes>
//     {/* TODO: Добавить остальные маршруты, когда будут созданы страницы */}
//     <Route path={Path.Main} element={<MainPage />} />
//     <Route path={Path.CategoryMovies} element={<Category />} />
//     <Route path={Path.CategoryMoviesFilter} element={<MoviesCategory />} />
//     <Route path={Path.Search} element={<SearchPage />} />
//     {/* <Route path={Path.FilteredMovies} element={<FilteredMovies />} /> */}
//     {/* <Route path={Path.Search} element={<Search />} /> */}
//     {/* <Route path={Path.Favorites} element={<Favorites />} /> */}

//     <Route path={Path.NotFound} element={<PageNotFound />} />
//   </Routes>
// )