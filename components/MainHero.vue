<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
</script>

<template>
  <div class="bg-yellow-200 p-10">
    <h1 class="text-4xl">
      {{ lang === 'es' ? 'En busca del punto y coma perdido' : 'Seeking the missed semicolom' }}
    </h1>
    <h2 class="text-xl">
      Miguel Manzano García
    </h2>
  </div>
  <h3 class="w-full py-3 px-10 bg-yellow-300 text-gray-700 text-center text-2xl">
    {{
    lang === 'es' ?
      'Desarrollo API usando tests automáticos con Laravel' :
      'API development with automated tests using Laravel'
    }}
  </h3>
</template>
