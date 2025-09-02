<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t('blog'),
})
const props = defineProps({
  blogLanguage: {
    type: String,
    default: 'en',
  }
})
const { data: articleList } = await useAsyncData(
    props.blogLanguage,
    async () => await useBlogIndex(props.blogLanguage)
);
</script>

<template>
  <div>
    <ArticleList :articles="articleList" />
  </div>
</template>