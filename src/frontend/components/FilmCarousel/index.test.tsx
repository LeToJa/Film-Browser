import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import FilmCarousel from '.'
import { mockFilms } from '../../../shared/mocks'

describe('FilmCarousel', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      value: 200,
    })
  })

  it('renders the title', () => {
    render(
      <MemoryRouter>
        <FilmCarousel title="Test Carousel" films={mockFilms} />
      </MemoryRouter>
    )
    expect(screen.getByText('Test Carousel')).toBeInTheDocument()
  })

  it('renders all films', () => {
    render(
      <MemoryRouter>
        <FilmCarousel title="Test Carousel" films={mockFilms} />
      </MemoryRouter>
    )
    mockFilms.forEach((film) => {
      expect(screen.getByText(film.title)).toBeInTheDocument()
    })
  })

  it('prev button is disabled initially', () => {
    render(
      <MemoryRouter>
        <FilmCarousel title="Test Carousel" films={mockFilms} />
      </MemoryRouter>
    )
    const prevButton = screen.getByText('<')
    expect(prevButton).toBeDisabled()
  })

  it('next button is disabled if all films fit in container', () => {
    render(
      <MemoryRouter>
        <FilmCarousel title="Test Carousel" films={[mockFilms[0]]} />
      </MemoryRouter>
    )
    const nextButton = screen.getByText('>')
    expect(nextButton).toBeDisabled()
  })

  it('clicking next and prev updates index and disables buttons correctly', () => {
    render(
      <MemoryRouter>
        <FilmCarousel title="Test Carousel" films={mockFilms} />
      </MemoryRouter>
    )
    const nextButton = screen.getByText('>')
    const prevButton = screen.getByText('<')

    fireEvent.click(nextButton)
    expect(prevButton).not.toBeDisabled()

    fireEvent.click(prevButton)
    expect(prevButton).toBeDisabled()
  })
})
