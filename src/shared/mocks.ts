enum FilmCategoriesType {
  Action = 'Action',
  Comedy = 'Comedy',
  Drama = 'Drama',
}

export const mockFilm = {
  id: 1,
  title: 'Test Film',
  overview: 'Film overview',
  category: FilmCategoriesType.Action,
  poster: 'https//testposter.jpg',
}

export const mockFilms = [
  mockFilm,
  {
    ...mockFilm,
    id: 2,
    title: 'Test Film 2',
  },
  {
    ...mockFilm,
    id: 3,
    title: 'Test Film 3',
  },
]
