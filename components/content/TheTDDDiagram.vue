<template>
  <slot />
  <div class="tdd-diagram-box">
    <div class="round-signal test-box">
      <div>
        Prueba
      </div>
    </div>

    <div class="round-signal green-box">
      <div>
        Código
      </div>
    </div>

    <div class="round-signal refactor-box">
      <div>
        Mejora
      </div>
    </div>
  </div>
</template>

<style scoped>
.tdd-diagram-box {
  width: 10em;
  height: 10em;
  position: relative;
}

.round-signal {
  width: 7em;
  height: 7em;
  position: absolute;
  border-radius: 7em;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 16px;
  color: white;
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
</style>
