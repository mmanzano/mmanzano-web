<template>
    <div class="service-container">
        <div class="service-container__title">
            <slot />
        </div>

        <div class="service-container__body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<style scoped>
.service-container {
    padding: 1rem;
    background-color: rgb(250 204 21 / 1);
    border-radius: 0.5rem;
}

.service-container__title {
    font-size: 1.5rem;
    line-height: 2rem;
    padding-bottom: 1rem;
    border-bottom-width: 2px;
    border-color: rgb(255 255 255 / 1);
}

.service-container__body {
    margin-top: 0.5rem;
    padding-top: 1rem;
}
</style>