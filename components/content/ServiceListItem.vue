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
    background-color: var(--menu-button-bg-color);
    border-radius: 0.5rem;
}

.service-container__title {
    font-size: var(--font-size-2);
    font-weight: bold;
    line-height: 2rem;
    padding-bottom: .5rem;
    border-width: 0px 0px 2px 0px;
    border-style: solid;
    border-color: rgb(255 255 255 / 0.8);
}

.service-container__body {
    font-size: var(--font-size-2);
    margin-top: 0.5rem;
    padding-top: 1rem;
}
</style>