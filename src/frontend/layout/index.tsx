import { Link } from 'react-router-dom'
import type { LayoutProps } from './index.types'

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/wishlist">Wishlist</Link>
      </nav>
      {children}
    </div>
  )
}
