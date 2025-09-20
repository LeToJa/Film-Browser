import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFilms, fetchFilmById } from './index'
import { mockFilm } from '../../shared/mocks'

beforeEach(() => {
  vi.restoreAllMocks()
})

describe('fetchFilms', () => {
  it('returns film data when response is ok', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([mockFilm]),
      } as Response)
    )

    const data = await fetchFilms()
    expect(data).toEqual([mockFilm])
  })

  it('throws an error when response is not ok', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response)
    )

    await expect(fetchFilms()).rejects.toThrow('Failed to fetch films')
  })
})

describe('fetchFilmById', () => {
  it('returns a single film when response is ok', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFilm),
      } as Response)
    )

    const data = await fetchFilmById(1)
    expect(data).toEqual(mockFilm)
  })

  it('throws an error when response is not ok', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response)
    )

    await expect(fetchFilmById(1)).rejects.toThrow('Film not found')
  })
})
