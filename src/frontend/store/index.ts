import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { WishlistState } from './index.types'
import { WISHLIST_STORAGE_KEY } from '../../shared/constants'

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      wishlist: [],
      addToWishlist: (film) =>
        set((state) =>
          state.wishlist.some((f) => f.id === film.id)
            ? state
            : { wishlist: [...state.wishlist, film] }
        ),
      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((f) => f.id !== id),
        })),
      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: WISHLIST_STORAGE_KEY,
    }
  )
)
