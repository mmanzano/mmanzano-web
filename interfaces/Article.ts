import type TocItem from './TocItem'
import type Author from './Author'

export default interface Article {
  slug: string,
  img: string,
  alt: string,
  author: Author,
  title: string,
  toc: TocItem[],
  description: string,
  updatedAt: string,
}
