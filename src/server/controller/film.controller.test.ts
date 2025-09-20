import { describe, it, expect, vi } from 'vitest'
import type { Request, Response } from 'express'
import { getAllFilms, getFilmById } from './film.controller'
import { dummyFilms } from '../data/index'

describe('film.controller', () => {
  it('getAllFilms should return all films', () => {
    const json = vi.fn()
    const res = { json } as Partial<Response>

    getAllFilms({} as Request, res as Response)
    expect(json).toHaveBeenCalledWith(dummyFilms)
  })

  it('getFilmById should return the correct film when found', () => {
    const json = vi.fn()
    const res = { json } as Partial<Response>
    const req = { params: { id: String(dummyFilms[0].id) } } as Partial<Request>

    getFilmById(req as Request, res as Response)
    expect(json).toHaveBeenCalledWith(dummyFilms[0])
  })

  it('getFilmById should return 404 when film not found', () => {
    const json = vi.fn()
    const status = vi.fn(() => ({ json }))
    const res = { status } as unknown as Partial<Response>
    const req = { params: { id: '99999' } } as Partial<Request>

    getFilmById(req as Request, res as Response)
    expect(status).toHaveBeenCalledWith(404)
    expect(json).toHaveBeenCalledWith({ message: 'Film not found' })
  })
})
