import type Author from './Author'

export default interface Article {
  _path: string | undefined,
  _type: string | undefined,
  title: string | undefined,
  slug: string,
  language: string,
  img: string,
  alt: string,
  authors: Author[],
  description: string,
  body: any,
  updatedAt: string,
}
