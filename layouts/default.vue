<script setup lang="ts">
await useLocaleFromRoute()
useHead({
  titleTemplate: (title) => title ? `${title} - Miguel Manzano` : 'Miguel Manzano'
})
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">

  <Head>
    <template v-for="link in head.link" :key="link.id">
      <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
    </template>
    <template v-for="meta in head.meta" :key="meta.id">
      <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
    </template>
  </Head>

  <Body>
    <div class="layout__background">
      <MainHeader />
      <div class="layout__content">
        <NuxtPage />
      </div>
    </div>
  </Body>

  </Html>
</template>

<style scoped>
.layout__container {
  width: 100%;
}

.layout__background {
  @apply min-h-screen bg-yellow-100 text-xl;
}

.layout__content {
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
}
</style>
