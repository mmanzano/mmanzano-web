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
        label: 'Comunicación con otras API',
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
        label: 'Laravel Vapor',
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

<template>
    <div class="ability_container">
        <ul class="ability_list">
            <li v-for="ability in abilities" :key="ability.id" class="ability_tag">
                {{ ability.label }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.ability_container {
    display: flex;
    justify-content: center;
}

.ability_list {
    padding-left: .1em;
    margin-top: .1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: .5em;
    max-width: 1024px;
}

.ability_tag {
    font-size: .8em;
    padding: 1em;
    background-color: #555;
    color: white;
    border-radius: 1em;
}
</style>