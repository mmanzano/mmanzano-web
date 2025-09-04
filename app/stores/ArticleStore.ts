import { defineStore, acceptHMRUpdate } from "pinia";
import type Article from "@/interfaces/Article";
import type Author from "@/interfaces/Author";

interface ArticleStoreState {
    articleList: Article[]
    article: Article | null
}

export const useArticleStore = defineStore("ArticleStore", {
    state: (): ArticleStoreState => {
        return {
            articleList: [],
            article: null
        };
    },
    actions: {
        async getArticleList(language: string) {
            const { data: articles } = await useAsyncData(
                `home-articles-${language}`,
                () => queryCollection('articles')
                    .andWhere(
                        (query) => query.where('language', '=', language)
                            .where('isHidden', '=', 0)
                            .where('isDeleted', '=', 0)
                    )
                    .order('order', "DESC")
                    .all()
            );

            this.articleList = Array.isArray(articles.value) ? articles.value.map(parseFullArticle) : [];
        },

        async getArticle(language: string, slug: string) {
            const { data: article } = await useAsyncData(
                `article-${language}-${slug}`,
                () => queryCollection('articles')
                    .andWhere(
                        (query) => query.where('language', '=', language)
                                .where('slug', '=', slug)
                                .where('isDeleted', '=', 0)
                    )
                    .first()
            );

            this.article = article.value ? parseFullArticle(article.value) : null;
        },
    },
})

function parseFullArticle(article: any): Article {
    return {
        'title': article.title,
        'slug': article.slug,
        'language': article.language,
        'img': article.img,
        'alt': article.alt,
        'authors': article.authors.map(parseAuthor),
        'description': article.description,
        'body': article.body,
        'updatedAt': article.updatedAt,
    }
}

function parseAuthor(author: Author): Author {
    return {
        name: author.name,
    }
}

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useArticleStore, import.meta.hot))
}