<template>
  <slot></slot>
  <div class="api-communication-diagram-box">
    <div class="client-server-box api-client">
      <div>
        Cliente
      </div>
    </div>

    <div class="arrows-box">
      <div>
        <div class="arrow-client">
          <div>
            Petición
          </div>
          <div class="arrow-draw">
            <div class="arrow-body"></div>
            <div class="arrow-head arrow-head-to-right"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="arrow-server">
          <div>
            Respuesta
          </div>
          <div class="arrow-draw">
            <div class="arrow-head arrow-head-to-left"></div>
            <div class="arrow-body"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="client-server-box api-server">
      <div>
        Servidor
      </div>
    </div>
  </div>
</template>

<style scoped>
.api-communication-diagram-box {
  display: flex;
  align-items: center;
}

.client-server-box {
  width: auto;
  height: 6em;
  padding: 1em;
  background-color: #FCE1E5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.api-client {
  background: #222;
  color: white;
}

.api-server {
  background: #555;
  color: white;
}

.arrows-box {
  min-width: 8em;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.arrow-client {
  color: #222;
  border-color: #222;
}

.arrow-server {
  color: #555;
  border-color: #555;
}

.arrow-draw {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.arrow-body {
  border-top: 6px solid;
  width: 100%;
}

.arrow-head {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 24px solid;
}

.arrow-head-to-right {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
}

.arrow-head-to-left {
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
}
</style>
