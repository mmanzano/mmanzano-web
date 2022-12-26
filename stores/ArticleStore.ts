import { defineStore, acceptHMRUpdate } from "pinia";

export const useArticleStore = defineStore("ArticleStore", {
    state: () => {
        return {
            articleList: [],
            article: null,
            paginator: []
        };
    },
    actions: {
        async getArticleList(language: string | null) {
            // Todo: Review later and add Typescript. I think they will add something like automatic resolution. Wait for it.
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
            this.articleList = articles
        },

        async getArticle(language: string | null, slug: string | null) {
            // Todo: Review later and add Typescript. I think they will add something like automatic resolution. Wait for it.
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
            this.article = article
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
            this.paginator = paginator
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useArticleStore, import.meta.hot));
}