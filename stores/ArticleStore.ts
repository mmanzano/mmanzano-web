import { defineStore, acceptHMRUpdate } from "pinia"
import Article from "@/interfaces/Article"
import Author from "@/interfaces/Author"
import TocItem from "@/interfaces/TocItem"
import PaginatorRef from "@/interfaces/PaginatorRef"

interface ArticleStoreState {
    articleList: Article[]
    article: Article | null
    paginator: PaginatorRef[]
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
        async getArticleList(language: string | null) {
            const { data: articles } = await useAsyncData(
                'home-articles',
                () => queryContent('articles')
                    .without([
                        'body',
                    ])
                    .where({
                        language: language || 'es',
                        isHidden: 0,
                        isDeleted: 0
                    })
                    .sort({
                        order: -1
                    })
                    .find()
            )

            this.articleList = articles.value?.map(parseFullArticle) as Article[]
        },

        async getArticle(language: string | null, slug: string | null) {
            const { data: article } = await useAsyncData(
                `article-${slug}`,
                () => queryContent('articles')
                    .where({
                        language: language || 'es',
                        slug: slug || 'articulo-no-encontrado',
                        isDeleted: 0
                    })
                    .findOne()
            )

            this.article = parseFullArticle(article.value) as Article
        },
        async getPaginator(language: string, slug: string, path: string) {
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
            this.paginator = paginator.value?.map(parsePaginator) as PaginatorRef[]
        }
    },
})

function parseFullArticle(article: any): Article {
    return {
        '_path': article._path as string,
        '_type': article._type,
        'slug': article.slug,
        'language': article.language,
        'img': article.img,
        'alt': article.alt,
        'authors': article.authors.map(parseAuthor),
        'title': article.title as string,
        'description': article.description,
        'body': article.body,
        'toc': article.body?.toc?.links?.map(parseFullToc) || [],
        'updatedAt': article.updatedAt,
    }
}

function parsePaginator(article: any): PaginatorRef | null {
    if (!article) {
        return null
    }

    return {
        slug: article.slug,
        title: article.title,
    }
}

function parseFullToc(toc: any): TocItem {
    return {
        id: toc.id,
        text: toc.text,
    }
}

function parseAuthor(author: any): Author {
    return {
        name: author.name,
    }
}

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useArticleStore, import.meta.hot))
}