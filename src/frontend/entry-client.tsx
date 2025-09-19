import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './general/styles.scss'
import './layout/styles.scss'
import './pages/FilmDetail/styles.scss'
import './components/FilmCarousel/styles.scss'
import './components/WishlistButton/styles.scss'

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
