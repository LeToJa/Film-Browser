import type { WishlistButtonProps } from './types'
import './styles.scss'

export default function WishlistButton({
  film,
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
}: WishlistButtonProps) {
  return isInWishlist ? (
    <button
      className="wishlist-button"
      onClick={() => removeFromWishlist(film.id)}
    >
      Remove from Wishlist
    </button>
  ) : (
    <button className="wishlist-button" onClick={() => addToWishlist(film)}>
      Add to Wishlist
    </button>
  )
}
