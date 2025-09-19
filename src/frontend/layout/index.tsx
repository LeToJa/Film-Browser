import { Link } from 'react-router-dom'
import type { ReactComponentWithChildrenProps } from '../general/types'

export default function Layout({ children }: ReactComponentWithChildrenProps) {
  return (
    <>
      <div id="app-header">
        <nav className="general-body">
          <Link to="/">Home</Link>
          <Link to="/wishlist">Wishlist</Link>
        </nav>
      </div>
      <section className="general-body">{children}</section>
    </>
  )
}
