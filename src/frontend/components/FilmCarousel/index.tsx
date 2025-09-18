import { Link } from 'react-router-dom'
import type { FilmCarouselProps } from './index.types'
import './styles.scss'

export default function FilmCarousel({ title, films }: FilmCarouselProps) {
  return (
    <div className="film-carousel">
      <h2>{title}</h2>
      <div className="film-carousel-list">
        {films.map((film) => (
          <Link
            key={film.id}
            to={`/film/${film.id}`}
            className={`film-card ${film.category.toLowerCase()}`}
          >
            <img src="https://picsum.photos/300/450" alt={film.title} />
            {film.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
