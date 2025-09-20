import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import CarouselButton from '.'

describe('CarouselButton', () => {
  it('renders correctly with children', () => {
    const { asFragment } = render(
      <CarouselButton onClick={() => {}}>{'Next >'}</CarouselButton>
    )
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByRole('button')).toHaveTextContent('Next >')
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<CarouselButton onClick={handleClick}>{'>'}</CarouselButton>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    const { asFragment } = render(
      <CarouselButton onClick={() => {}} disabled>
        {'>'}
      </CarouselButton>
    )
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
