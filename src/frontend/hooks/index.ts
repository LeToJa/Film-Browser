import { useQuery } from '@tanstack/react-query'
import { fetchFilmById, fetchFilms } from '../api'
import type { FilmType } from '../../shared/types'

export function useFilms() {
  return useQuery<FilmType[]>({
    queryKey: ['films'],
    queryFn: fetchFilms,
  })
}

export function useFilm(id: number) {
  return useQuery<FilmType>({
    queryKey: ['film', id],
    queryFn: () => fetchFilmById(id),
    enabled: !!id,
  })
}
