import { useWishlistStore } from '../../store'
import FilmCarousel from '../../components/FilmCarousel'

export default function Wishlist() {
  const { wishlist } = useWishlistStore()

  return (
    <div id="wishlist-page">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="loading-message">Your wishlist is empty.</p>
      ) : (
        <FilmCarousel title="Wishlist" films={wishlist} />
      )}
    </div>
  )
}
