import type { FilmType } from '../../../shared/types'

export type WishlistButtonProps = {
  film: FilmType
  isInWishlist: boolean
  addToWishlist: (film: FilmType) => void
  removeFromWishlist: (id: number) => void
}
