import { defineStore, acceptHMRUpdate } from "pinia";

export const useArticleStore = defineStore("ArticleStore", {
    state: () => {
        return {
            articleList: null,
            article: null
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
                        isArchived: 0
                    })
                    .sort({
                        'order': -1
                    })
                    .find()
            )
            this.articleList = articles;
        },

        async getArticle(language: string | null, slug: string | null) {
            // Todo: Review later and add Typescript. I think they will add something like automatic resolution. Wait for it.
            const { data: article } = await useAsyncData(
                `article-${slug}`,
                () => queryContent('articles')
                    .where({
                        language: language || 'es',
                        slug: slug || 'articulo-no-encontrado',
                        isArchived: 0
                    })
                    .findOne()
            )
            this.article = article;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useArticleStore, import.meta.hot));
}