export interface IPages {
  id: string
  path: string
  title: string
}

export const pages: IPages[] = [
  {
    id: '0',
    path: '/',
    title: 'Home',
  },
  {
    id: '1',
    path: '/devlog',
    title: 'DevLog',
  },
]
