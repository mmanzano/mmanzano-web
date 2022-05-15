<template>
    <div class="flex justify-center">
        <ul class="pl-2 mt-2 flex flex-wrap gap-4 text-base w-full lg:w-1/2">
            <li v-for="ability in abilities" :key="ability.id" class="p-4 bg-gray-50 border-4 border-solid border-black rounded-xl">
                {{ ability.label }}
            </li>
        </ul>
    </div>
</template>


<script setup lang="ts">
const abilities = [
    {
        id: 1,
        label: 'Desarrollo Guiado por Test (TDD)',
    },
    {
        id: 2,
        label: 'Desarrollo de API',
    },
    {
        id: 3,
        label: 'Comunicación con API de terceros',
    },
    {
        id: 4,
        label: 'Laravel Nova',
    },
    {
        id: 5,
        label: 'Queues en Laravel',
    },
    {
        id: 6,   
        label: 'Despliegue de aplicaciones usando Laravel Vapor',
    },
    {
        id: 7,
        label: 'Continuous Integration',
    },
    {
        id: 8,
        label: 'Continuous Delivery',
    },
    {
        id: 9,
        label: 'Continuous Deployment',
    },
    {
        id: 10,
        label: 'Docker',
    },
    {
        id: 11,
        label: 'PHPCSFixer',
    },
]
</script>