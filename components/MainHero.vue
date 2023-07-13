<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div>
    <div class="hero">
      <div class="moto-content">
        <h1 class="moto">
            {{ t('moto') }}
        </h1>
        <div class="semicolon">;</div>
      </div>

      <h2 class="creator">
        Miguel Manzano García
      </h2>
    </div>
  </div>
</template>

<style scoped>
.hero {
  padding: 0.1rem 2.5rem;
}

.moto-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.moto {
  font-family: 'RhodiumLibre', 'Roboto', Arial, Helvetica, sans-serif;
  padding: 0rem 0.5rem 0.5rem;
  text-align: center;
  font-size: var(--font-size-5);
}

.semicolon {
  display: none;
}

.creator {
  font-family: 'RhodiumLibre', 'Roboto', Arial, Helvetica, sans-serif;
  padding: 0.2rem;
  margin-bottom: 0.5em;
  text-align: center;
  font-size: var(--font-size-1);
}


@media(min-width: 750px) {
  .moto {
    padding: 0rem 0.5rem 0.5rem;
    text-align: left;
    font-size: var(--font-size-6);
  }

  .creator {
    padding: 0rem 0.5rem 2rem;
    margin-bottom: 0.5em;
    font-size: var(--font-size-3);
    text-align: left;
  }

  .semicolon {
    display: inline-block;
    width: fit-content;
    height: fit-content;
    font-family: 'Kablammo', 'Roboto', Arial, Helvetica, sans-serif;
    transform: rotate(-30deg);
    margin-top: -35px;
    font-size: 70px;
    font-weight: normal;
    color: black;
  }
}
</style>