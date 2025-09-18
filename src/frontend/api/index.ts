import type { FilmType } from '../../shared/types'

export async function fetchFilms(): Promise<FilmType[]> {
  const response = await fetch('/api/films')

  if (!response.ok) {
    throw new Error('Failed to fetch films')
  }

  return response.json()
}

export async function fetchFilmById(id: number): Promise<FilmType> {
  const response = await fetch(`/api/films/${id}`)

  if (!response.ok) {
    throw new Error('Film not found')
  }

  return response.json()
}
