export type FilmCategoriesType = 'Action' | 'Comedy' | 'Drama'

export type FilmType = {
  id: number
  title: string
  category: FilmCategoriesType
}
