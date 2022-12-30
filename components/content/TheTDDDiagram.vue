<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
</script>

<template>
  <slot />
  <div class="tdd-diagram-box">
    <div class="round-signal test-box">
      <div>
        <div class="box-text">
          {{ lang === 'es' ? 'Prueba' : 'Test' }}
        </div>
      </div>
    </div>

    <div class="round-signal green-box">
      <div>
        <div class="box-text">
          {{ lang === 'es' ? 'Código' : 'Code' }}
        </div>
      </div>
    </div>

    <div class="round-signal refactor-box">
      <div>
        <div class="box-text">
          {{ lang === 'es' ? 'Mejora' : 'Refactor' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tdd-diagram-box {
  width: 7rem;
  height: 7rem;
  position: relative;
}

.round-signal {
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 16px;
  color: white;
}

.box-text {
  display: none;
}

.test-box {
  top: 0;
  left: 0;
  background-color: #000;
}

.green-box {
  top: 25%;
  right: 0;
  background-color: #333;
}

.refactor-box {
  bottom: 0;
  left: 0;
  background-color: #555;
}

@media(min-width: 300px) {
  .box-text {
    display: block;
  }

  .tdd-diagram-box {
    width: 12rem;
    height: 12rem;
  }

  .round-signal {
    width: 7rem;
    height: 7rem;
    border-radius: 7rem;
  }
}
</style>
