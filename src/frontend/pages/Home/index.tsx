import { useFilms } from '../../hooks'
import FilmCarousel from '../../components/FilmCarousel'
import type { FilmCategoriesType } from '../../../shared/types'

export default function Home() {
  const categories: FilmCategoriesType[] = ['Action', 'Comedy', 'Drama']

  const { data: films, isLoading, error } = useFilms()

  return (
    <section id="home-page">
      <h1>Homepage</h1>
      {isLoading && <p className="loading-message">Loading...</p>}
      {error && <p className="loading-message">Error loading films</p>}
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
    </section>
  )
}
