<template>
  <div v-if="config.blogIsVisible">
    <input
      class="border-2 border-solid pl-2"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar"
    />
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type Article from '@/interfaces/Article'
import { ref } from 'vue'
import type { Ref } from 'vue'

const config = useNuxtApp().$config;
const searchQuery: Ref<string> = ref('');
const articles: Ref<Article[]> = ref([]);

// Todo: Import articles using Content 2 and move that to Nuxt3 syntax.
// watch: {
//   async searchQuery(searchQuery) {
//     if (!searchQuery) {
//       this.articles = []
//       return
//     }
//     this.articles = await this.$content('articles')
//       .limit(6)
//       .search(searchQuery)
//       .fetch()
//   }
// }
</script>
