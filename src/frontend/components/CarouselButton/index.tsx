import { CarouselButtonProps } from './index.types'

export default function CarouselButton({
  onClick,
  disabled = false,
  children,
}: CarouselButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className="carousel-button">
      {children}
    </button>
  )
}
