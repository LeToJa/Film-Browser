import type { FilmType } from '../../shared/types'

export type WishlistState = {
  wishlist: FilmType[]
  addToWishlist: (film: FilmType) => void
  removeFromWishlist: (id: number) => void
  clearWishlist: () => void
}
