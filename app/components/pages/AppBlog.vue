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
/*const { data: articleList, execute } = useAsyncData(
    () => props.blogLanguage,
    () => useBlogIndex(props.blogLanguage)
);
await execute();*/
const articleList = await useBlogIndex(props.blogLanguage);
</script>

<template>
  <div v-if="articleList && articleList.length > 0 && articleList[0].language === blogLanguage">
    <ArticleList :articles="articleList" :key="blogLanguage"/>
  </div>
</template>