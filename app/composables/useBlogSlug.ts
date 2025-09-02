import type Article from "@/interfaces/Article.ts"
import type { RouteLocationNormalizedLoaded } from "vue-router"
import { useArticleStore } from "@/stores/ArticleStore"

export const useBlogSlug = async (): Promise<Article> => {
  const ArticleStore = useArticleStore()
  const route: RouteLocationNormalizedLoaded = useRoute()
  const slug: string | null = usePropertyFromRoute(route, 'slug')
  if (slug === null) {
    throw Error('Something is not working properly. We are not getting the slug. Sorry, can you try again.')
  }
  await ArticleStore.getArticle(route.fullPath.split('/')[1] || 'en', slug)
  if (!ArticleStore.article) {
    throw createError({ statusCode: 404, fatal: true })
  }

  return ArticleStore.article
}
