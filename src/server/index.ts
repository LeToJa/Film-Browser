import express from 'express'
import path from 'path'
import filmRoutes from './routes/film.routes.ts'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/films', filmRoutes)
app.use(express.static(path.resolve('dist')))

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
