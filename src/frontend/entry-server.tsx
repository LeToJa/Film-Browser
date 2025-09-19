import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import App from './App'

export function renderApp(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
