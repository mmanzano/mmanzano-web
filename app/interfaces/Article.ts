import type Author from './Author'

export default interface Article {
  title?: string;
  slug: string;
  language: string;
  img: string;
  alt: string;
  authors: Author[];
  description: string;
  body: any;
  updatedAt: string;
}
