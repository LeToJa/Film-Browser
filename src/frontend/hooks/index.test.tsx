import { describe, it, expect, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as api from '../api'
import { useFilms, useFilm } from './index'
import { FilmType } from '../../shared/types'
import { mockFilm, mockFilms } from '../../shared/mocks'

const queryClient = new QueryClient()

describe('useFilms', () => {
  it('fetches films successfully', async () => {
    const mockData = mockFilms
    vi.spyOn(api, 'fetchFilms').mockResolvedValue(mockData as FilmType[])

    const { result } = renderHook(() => useFilms(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data).toEqual(mockData)
  })
})

describe('useFilm', () => {
  it('fetches film by id successfully', async () => {
    vi.spyOn(api, 'fetchFilmById').mockResolvedValue(mockFilm as FilmType)

    const { result } = renderHook(() => useFilm(1), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data).toEqual(mockFilm)
  })

  it('does not run query if id is falsy', () => {
    const { result } = renderHook(() => useFilm(0), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    expect(result.current.isFetching).toBe(false)
    expect(result.current.data).toBeUndefined()
  })
})
