import type TocItem from './TocItem'
import type Author from './Author'

export default interface Article {
  _path: string,
  slug: string,
  language: string,
  img: string,
  alt: string,
  authors: Author[],
  title: string,
  toc: TocItem[],
  description: string,
  updatedAt: string,
}
