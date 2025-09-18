import type { FilmCategoriesType } from '../../../shared/types'
import { useFilms } from '../../hooks'
import FilmCarousel from '../../components/FilmCarousel'

export default function Home() {
  const categories: FilmCategoriesType[] = ['Action', 'Comedy', 'Drama']

  const { data: films, isLoading, error } = useFilms()

  return (
    <div>
      <h1>Homepage</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading films</p>}
      {!isLoading &&
        !error &&
        films &&
        categories.map((cat) => (
          <FilmCarousel
            key={cat}
            title={cat + ' Films'}
            films={films.filter((f) => f.category === cat)}
          />
        ))}
    </div>
  )
}
