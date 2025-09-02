import Article from "~~/interfaces/Article"
import { useArticleStore } from "@/stores/ArticleStore"

export const useBlogIndex = async (): Promise<Article[]> => {
  const ArticleStore = useArticleStore()
  const route = useRoute()
  await ArticleStore.getArticleList(route.fullPath.split('/')[1])

  return ArticleStore.articleList
}
