export interface CategoryRouteParams {
  path: string,
  title: string
}

export const CategoryType = {
  COMICS: {
    path: 'comics',
    title: 'Quadrinhos',
  },
  SERIES: {
    path: 'series',
    title: 'Series',
  },
  EVENTS: {
    path: 'events',
    title: 'Eventos',
  },
};
