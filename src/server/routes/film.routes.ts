import { Router } from 'express'
import { getAllFilms, getFilmById } from '../controller/film.controller'

const router = Router()

router.get('/', getAllFilms)
router.get('/:id', getFilmById)

export default router
