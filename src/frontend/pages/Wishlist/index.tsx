import { Link } from 'react-router-dom'
import { useWishlistStore } from '../../store'
import WishlistButton from '../../components/WishlistButton'

export default function Wishlist() {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore()

  if (wishlist.length === 0) {
    return <p>Your wishlist is empty.</p>
  }

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      <ul>
        {wishlist.map((film) => (
          <li
            key={film.id}
            className={`film-item ${film.category.toLowerCase()}`}
          >
            <Link to={`/film/${film.id}`}>
              <img src={film.poster} alt={film.title} />
              {film.title}
            </Link>
            <WishlistButton
              film={film}
              isInWishlist={true}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
