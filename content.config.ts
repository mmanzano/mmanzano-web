import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        articles: defineCollection({
            type: 'page',
            source: '**/*.md',
            schema: z.object({
                title: z.string(),
                slug: z.string(),
                order: z.bigint(),
                isHidden: z.boolean(),
                isDeleted: z.boolean(),
                img: z.string(),
                alt: z.string(),
                description: z.string(),
                updatedAt: z.date(),
                language: z.string(),
                authors: z.array(z.object({ name: z.string(), picture: z.string()}))
            })
        })
    }
})
