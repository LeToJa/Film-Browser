export type FilmCategoriesType = 'Action' | 'Comedy' | 'Drama'

export type FilmType = {
  id: number
  title: string
  overview: string
  category: FilmCategoriesType
  poster: string
}
