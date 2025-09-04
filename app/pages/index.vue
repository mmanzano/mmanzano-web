<template>
  <div class="container">
    <div>
      <UIAppMenuItem to="/en">English</UIAppMenuItem>
    </div>
    <div class="index-graphic">
      <TheTDDDiagram>
        <template #test>
          Hi
        </template>
        <template #code>
          Hola
        </template>
        <template #refactor>
          👋
        </template>
      </TheTDDDiagram>
    </div>
    <div>
      <UIAppMenuItem to="/es">Castellano</UIAppMenuItem>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  background: var(--layout-bg-color);
  font-size: var(--font-size-2);
}

.index-graphic {
  display: none;
}

@media (min-width: 300px) {
  .index-graphic {
    display: block;
  }
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    gap: 0;
    justify-content: space-evenly;
  }
}
</style>
