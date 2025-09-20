import { describe, it, expect, beforeEach } from 'vitest'
import { useWishlistStore } from './index'
import { mockFilm } from '../../shared/mocks'

beforeEach(() => {
  localStorage.clear()
})

describe('useWishlistStore', () => {
  it('adds a film to the wishlist', () => {
    const { addToWishlist, wishlist } = useWishlistStore.getState()
    expect(wishlist).toHaveLength(0)

    addToWishlist(mockFilm)
    expect(useWishlistStore.getState().wishlist).toHaveLength(1)
    expect(useWishlistStore.getState().wishlist[0]).toEqual(mockFilm)
  })

  it('does not add duplicate films', () => {
    const { addToWishlist } = useWishlistStore.getState()

    addToWishlist(mockFilm)
    addToWishlist(mockFilm)
    expect(useWishlistStore.getState().wishlist).toHaveLength(1)
  })

  it('removes a film from the wishlist', () => {
    const { addToWishlist, removeFromWishlist } = useWishlistStore.getState()
    addToWishlist(mockFilm)

    removeFromWishlist(mockFilm.id)
    expect(useWishlistStore.getState().wishlist).toHaveLength(0)
  })

  it('clears the wishlist', () => {
    const { addToWishlist, clearWishlist } = useWishlistStore.getState()
    addToWishlist(mockFilm)
    addToWishlist({ ...mockFilm, id: 2, title: 'Another Film' })

    clearWishlist()
    expect(useWishlistStore.getState().wishlist).toHaveLength(0)
  })
})
