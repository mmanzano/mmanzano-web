import type Article from "@/interfaces/Article";
import { useArticleStore } from "@/stores/ArticleStore";

export const useBlogIndex = async (language: string): Promise<Article[]> => {
  const ArticleStore = useArticleStore();
  await ArticleStore.getArticleList(language);

  return ArticleStore.articleList;
}
