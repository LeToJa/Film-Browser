import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createServer as createViteServer } from 'vite'
import filmRoutes from './routes/film.routes'
import { renderApp } from '../frontend/entry-server'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function startServer() {
  const app = express()
  const PORT = process.env.PORT || 3000

  app.use(express.json())
  app.use('/api/films', filmRoutes)

  const vite = await createViteServer({
    server: { middlewareMode: true },
    ssr: { noExternal: ['react', 'react-dom', 'react-router-dom'] },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use(async (req, res) => {
    try {
      const url = req.url
      let template = fs.readFileSync(
        path.resolve(__dirname, '../../index.html'),
        'utf-8'
      )

      template = await vite.transformIndexHtml(url, template)

      const appHtml = renderApp(url)

      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )

      res.status(200).send(html)
    } catch (err: unknown) {
      vite.ssrFixStacktrace(err as Error)
      console.error(err)
      if (err instanceof Error) {
        res.status(500).send(err.message)
      } else {
        res.status(500).send('Unknown server error')
      }
    }
  })

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

startServer()
