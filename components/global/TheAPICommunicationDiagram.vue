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
        Server
      </div>
    </div>
  </div>
</template>

<style scoped>
.api-communication-diagram-box {
  width: 600px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.client-server-box {
  width: 30%;
  height: 80%;
  background-color: #FCE1E5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.api-client {
  background: green;
  color: white;
}
.api-server {
  background: deeppink;
  color: white;
}
.arrows-box {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.arrow-client {
  color: green;
  border-color: green;
}
.arrow-server {
  color: deeppink;
  border-color: deeppink;
}
.arrow-draw {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.arrow-body {
  border-top: 6px solid;
  width: 300px;
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
