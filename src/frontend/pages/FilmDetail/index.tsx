import { useParams } from 'react-router-dom'
import { useFilm } from '../../hooks'
import { useWishlistStore } from '../../store'
import WishlistButton from '../../components/WishlistButton'
import './styles.scss'

export default function FilmDetail() {
  const { id } = useParams()
  const filmId = Number(id)

  const { data: film, isLoading, isError, error } = useFilm(filmId)
  const { addToWishlist, wishlist, removeFromWishlist } = useWishlistStore()

  if (isLoading) return <p>Loading film...</p>
  if (isError) return <p>Error: {(error as Error).message}</p>
  if (!film) return <p>Film not found</p>

  const isInWishlist = wishlist.some((f) => f.id === film.id)

  return (
    <div className={`film-detail film-item ${film.category.toLowerCase()}`}>
      <h1>{film.title}</h1>
      <img src="https://picsum.photos/300/450" alt={film.title} />
      <p>Description placeholder for {film.title}</p>
      <WishlistButton
        film={film}
        isInWishlist={isInWishlist}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />
    </div>
  )
}
