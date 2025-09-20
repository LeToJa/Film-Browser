import { useParams } from 'react-router-dom'
import { useFilm, useFilms } from '../../hooks'
import { useWishlistStore } from '../../store'
import WishlistButton from '../../components/WishlistButton'
import FilmCarousel from '../../components/FilmCarousel'

export default function FilmDetail() {
  const { id } = useParams()
  const filmId = Number(id)

  const {
    data: film,
    isLoading: isLoadingFilm,
    isError: isErrorFilm,
    error: errorFilm,
  } = useFilm(filmId)
  const {
    data: films = [],
    isLoading: isLoadingFilms,
    isError: isErrorFilms,
    error: errorFilms,
  } = useFilms()
  const { addToWishlist, wishlist, removeFromWishlist } = useWishlistStore()

  if (isLoadingFilm || isLoadingFilms)
    return <p className="loading-message">Loading film...</p>
  if (isErrorFilm)
    return (
      <p className="loading-message">Error: {(errorFilm as Error).message}</p>
    )
  if (isErrorFilms)
    return (
      <p className="loading-message">Error: {(errorFilms as Error).message}</p>
    )
  if (!film) return <p className="loading-message">Film not found</p>

  const isInWishlist = wishlist.some((f) => f.id === film.id)
  const relatedFilms = films.filter(
    (f) => f.category === film.category && f.id !== film.id
  )

  return (
    <section
      id="detail-page"
      className={`film-item ${film.category.toLowerCase()}`}
    >
      <h1>{film.title}</h1>
      <aside>
        <img src={film.poster} alt={film.title} />
      </aside>
      <article>
        <p>{film.overview}</p>
        <WishlistButton
          film={film}
          isInWishlist={isInWishlist}
          addToWishlist={addToWishlist}
          removeFromWishlist={removeFromWishlist}
        />
      </article>
      {relatedFilms.length > 0 && (
        <FilmCarousel
          title={`More ${film.category} films like this`}
          films={relatedFilms}
        />
      )}
    </section>
  )
}
