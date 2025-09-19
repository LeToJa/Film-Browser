import type { Request, Response } from 'express'
import { dummyFilms } from '../data/index'

export function getAllFilms(_req: Request, res: Response) {
  res.json(dummyFilms)
}

export function getFilmById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const film = dummyFilms.find((f) => f.id === id)
  if (!film) return res.status(404).json({ message: 'Film not found' })
  res.json(film)
}
