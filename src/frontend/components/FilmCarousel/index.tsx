import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { FilmCarouselProps } from './index.types'

export default function FilmCarousel({ title, films }: FilmCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(1)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const card = containerRef.current.querySelector(
          '.film-card'
        ) as HTMLElement

        if (card) {
          const cardWidth = card.offsetWidth
          setVisibleCount(Math.floor(containerWidth / cardWidth))
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [films])

  const maxIndex = Math.ceil(films.length / visibleCount) - 1

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  return (
    <div className="film-carousel">
      <h2 className="carousel-title">
        {title}
        <div className="carousel-controls">
          <button
            onClick={prev}
            disabled={index === 0}
            className="carousel-button"
          >
            {'<'}
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            className="carousel-button"
          >
            {'>'}
          </button>
        </div>
      </h2>
      <div className="film-carousel-wrapper">
        <div
          ref={containerRef}
          className="film-carousel-list"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {films.map((film) => (
            <Link
              key={film.id}
              to={`/film/${film.id}`}
              className={`film-card ${film.category.toLowerCase()}`}
            >
              <img src={film.poster} alt={film.title} className="card-image" />
              <div className="card-title">{film.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
