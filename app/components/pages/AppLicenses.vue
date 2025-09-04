<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t('licenses')
});
</script>

<template>
  <div>
    <h2 class="title">{{ t('licenses') }}</h2>

    <h3 class="element">Twitter Icon</h3>
    <img src="~/assets/icons/twitter.svg" alt="twitter logo" class="icon" />
    <p><strong>COLLECTION:</strong> Radix Interface Icons</p>
    <p><strong>LICENSE:</strong> MIT License</p>
    <p><strong>AUTHOR:</strong> radix-ui</p>
    <p>
      <NuxtLink class="link" target="_blank" to="https://www.svgrepo.com/svg/361649/twitter-logo">
        Original Source
      </NuxtLink>
    </p>

    <h3 class="element">Flickr Icon</h3>
    <img src="~/assets/icons/flickr.svg" alt="Flickr logo" class="icon" />
    <p><strong>COLLECTION:</strong> Themify Glyphs Icons</p>
    <p><strong>LICENSE:</strong> GPL License</p>
    <p><strong>AUTHOR:</strong> Themify</p>
    <p>
      <NuxtLink class="link" target="_blank" to="https://www.svgrepo.com/svg/409115/flickr">
        Original Source
      </NuxtLink>
    </p>

    <h3 class="element">LinkedIn Icon</h3>
    <img src="~/assets/icons/linkedin.svg" alt="LindedIn logo" class="icon" />
    <p><strong>COLLECTION:</strong> Phosphor Bold Icons</p>
    <p><strong>LICENSE:</strong> MIT License</p>
    <p><strong>AUTHOR:</strong> phosphor</p>
    <p>
      <NuxtLink class="link" target="_blank" to="https://www.svgrepo.com/svg/362834/linkedin-logo-bold">
        Original Source
      </NuxtLink>
    </p>

    <h3 class="element">GitHub Icon</h3>
    <img src="~/assets/icons/github.svg" alt="GitHub logo" class="icon" />
    <p><strong>COLLECTION:</strong> Elusive Icons Interface</p>
    <p><strong>LICENSE:</strong> MIT License</p>
    <p><strong>AUTHOR:</strong> elusiveicons</p>
    <p>
      <NuxtLink class="link" target="_blank" to="https://www.svgrepo.com/svg/391865/github">Original Source
      </NuxtLink>
    </p>

    <h3 class="element">Instagram Icon</h3>
    <img src="~/assets/icons/instagram.svg" alt="Instagram logo" class="icon" />
    <p><strong>COLLECTION:</strong> Dashicons Filled Interface Iconse</p>
    <p><strong>LICENSE:</strong> GPL License</p>
    <p><strong>AUTHOR:</strong> Wordpress</p>
    <p>
      <NuxtLink class="link" target="_blank" to="https://www.svgrepo.com/svg/447413/instagram">
        Original Source
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>
.title {
  font-size: 3rem;
  margin-bottom: 0 0 5rem;
}

.element {
  font-size: 2rem;
  margin: 4rem 0 0 0;
  line-height: 1rem;
}

.icon {
  height: 40px;
  margin: 1em 0;
}

.link {
  text-decoration: underline;
}
</style>