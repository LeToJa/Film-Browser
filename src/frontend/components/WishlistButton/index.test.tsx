import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import WishlistButton from '.'
import { mockFilm } from '../../../shared/mocks'

describe('WishlistButton', () => {
  it('renders "Add to Wishlist" when film is not in wishlist', () => {
    const addToWishlist = vi.fn()
    const removeFromWishlist = vi.fn()

    render(
      <WishlistButton
        film={mockFilm}
        isInWishlist={false}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />
    )

    const button = screen.getByText('Add to Wishlist')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(addToWishlist).toHaveBeenCalledWith(mockFilm)
  })

  it('renders "Remove from Wishlist" when film is in wishlist', () => {
    const addToWishlist = vi.fn()
    const removeFromWishlist = vi.fn()

    render(
      <WishlistButton
        film={mockFilm}
        isInWishlist={true}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />
    )

    const button = screen.getByText('Remove from Wishlist')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(removeFromWishlist).toHaveBeenCalledWith(mockFilm.id)
  })
})
