<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <slot></slot>
  <div class="api-communication-diagram-box">
    <div class="client-server-box api-client">
      <div class="client-server-text">
        {{ t('api_communication_client') }}
      </div>
    </div>

    <div class="arrows-box">
      <div>
        <div class="arrow-client">
          <div class="arrow-client-text">
            {{ t('api_communication_request') }}
          </div>
          <div class="arrow-draw">
            <div class="arrow-body"></div>
            <div class="arrow-head arrow-head-to-right"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="arrow-server">
          <div class="arrow-server-text">
            {{ t('api_communication_response') }}
          </div>
          <div class="arrow-draw">
            <div class="arrow-head arrow-head-to-left"></div>
            <div class="arrow-body"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="client-server-box api-server">
      <div class="client-server-text">
        {{ t('api_communication_server') }}
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
  min-width: 1.5em;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.arrow-server-text,
.arrow-client-text,
.client-server-text {
  display: none;
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

@media(min-width: 300px) {
  .arrows-box {
    min-width: 3em;
  }

  .client-server-text {
    display: block;
  }

  .client-server-box {
    padding: .5em;
  }
}

@media(min-width: 921px) {

  .arrow-server-text,
  .arrow-client-text {
    display: block;
  }

  .arrows-box {
    min-width: 8em;
  }
}
</style>
