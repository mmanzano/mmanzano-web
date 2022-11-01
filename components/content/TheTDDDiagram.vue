<template>
  <slot/>
  <div class="tdd-diagram-box">
    <div class="round-signal test-box">
      <div>
        Prueba
      </div>
    </div>

    <div class="round-signal green-box">
      <div>
        Verde
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
  width: 300px;
  height: 300px;
  background-color: #FEFEFE;
  position: relative;
}

.round-signal {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50px;
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
  background-color: red;
}

.green-box {
  top: 100px;
  right: 0;
  background-color: green;
}

.refactor-box {
  bottom: 0;
  left: 0;
  background-color: blue;
}
</style>
