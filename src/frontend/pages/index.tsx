import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import FilmDetail from './FilmDetail'
import Wishlist from './Wishlist'

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/film/:id" element={<FilmDetail />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  )
}
