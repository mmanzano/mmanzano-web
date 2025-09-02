import { defineStore, acceptHMRUpdate } from "pinia"
import { ParsedContent } from "@nuxt/content/dist/runtime/types"
import Article from "@/interfaces/Article"
import Author from "@/interfaces/Author"
import PaginatorRef from "@/interfaces/PaginatorRef"

interface ArticleStoreState {
    articleList: Article[]
    article: Article | null
    paginator: (PaginatorRef | null)[]
}

export const useArticleStore = defineStore("ArticleStore", {
    state: (): ArticleStoreState => {
        return {
            articleList: [],
            article: null,
            paginator: []
        }
    },
    actions: {
        async getArticleList(language: string) {
            const { data: articles } = await useAsyncData(
                'home-articles',
                () => queryContent('articles')
                    .without([
                        'body',
                    ])
                    .where({
                        language,
                        isHidden: 0,
                        isDeleted: 0
                    })
                    .sort({
                        order: -1
                    })
                    .find()
            )

            this.articleList = Array.isArray(articles.value) ? articles.value.map(parseFullArticle) : []
        },

        async getArticle(language: string, slug: string) {
            const { data: article } = await useAsyncData(
                `article-${slug}`,
                () => queryContent('articles')
                    .where({
                        language,
                        slug,
                        isDeleted: 0
                    })
                    .findOne()
            )

            this.article = article.value ? parseFullArticle(article.value) : null
        },

        async getPaginator(language: string, slug: string, path?: string) {
            if (path === undefined) {
                this.paginator = []
                return
            }

            const { data: paginator } = await useAsyncData(
                `article-${language}-${slug}-links`,
                () => queryContent('articles')
                    .only([
                        'title',
                        'slug'
                    ])
                    .where({
                        language,
                        isHidden: 0,
                        isDeleted: 0
                    })
                    .sort({
                        order: 1
                    })
                    .findSurround(path)
            )

            this.paginator = Array.isArray(paginator.value) ? paginator.value.map(parsePaginator) : []
        }
    },
})

function parseFullArticle(article: Partial<ParsedContent>): Article {
    return {
        '_path': article._path,
        '_type': article._type,
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

function parsePaginator(article: Partial<ParsedContent>): PaginatorRef | null {
    if (!article) {
        return null
    }

    return {
        title: article.title,
        slug: article.slug,
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