<template>
    <div class="bg-yellow-400 p-4 rounded-lg">
        <div class="text-bold text-2xl pb-4 border-b-2 border-white">
            <slot />
        </div>

        <div class="mt-2 pt-4">
            <slot name="body"></slot>
        </div>
    </div>
</template>
