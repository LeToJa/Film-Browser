import request from 'supertest'
import express from 'express'
import router from './film.routes'
import { getAllFilms, getFilmById } from '../controller/film.controller'
import { vi, describe, it, expect } from 'vitest'
import { mockFilm, mockFilms } from '../../shared/mocks'

vi.mock('../controller/film.controller', () => ({
  getAllFilms: vi.fn((_req, res) => res.json(mockFilms)),
  getFilmById: vi.fn((_req, res) => res.json(mockFilm)),
}))

describe('film.routes', () => {
  const app = express()
  app.use(express.json())
  app.use('/films', router)

  it('GET /films should call getAllFilms', async () => {
    const res = await request(app).get('/films')
    expect(res.status).toBe(200)
    expect(res.body).toEqual(mockFilms)
    expect(getAllFilms).toHaveBeenCalled()
  })

  it('GET /films/:id should call getFilmById', async () => {
    const res = await request(app).get('/films/123')
    expect(res.status).toBe(200)
    expect(res.body).toEqual(mockFilm)
    expect(getFilmById).toHaveBeenCalled()
  })
})
