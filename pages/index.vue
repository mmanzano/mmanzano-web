<template>
  <div>
    <h3 class="text-xl mb-2">Servicios</h3>
    <ul class="pl-2 mb-4">
      <li>Desarrollo backend para proyectos puntuales</li>
      <li>Formación en buenas prácticas PHP</li>
    </ul>

    <h3 class="text-xl mb-12">Habilidades</h3>
    <div class="mb-2">
      <GlobalTheTDDDiagram>
        <p class="mb-2">Desarrollo Guiado por Test (TDD)</p>
      </GlobalTheTDDDiagram>
    </div>
    <div class="mb-2">
      <GlobalTheAPICommunicationDiagram>
        <p class="mb-2">Desarrollo de APIs</p>
      </GlobalTheAPICommunicationDiagram>
    </div>
    <ul class="pl-2">
      <li>Comunicación con APIs de terceros</li>
      <li>Laravel Nova</li>
      <li>Laravel Queues</li>
      <li>Laravel Vapor</li>
      <li>CI</li>
      <li>CD</li>
      <li>Docker</li>
      <li>PHPCSFixer</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'general',
  title: 'Indice'
})
</script>
