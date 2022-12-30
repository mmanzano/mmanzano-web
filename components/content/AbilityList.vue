<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
const abilities = [
    {
        id: 1,
        label: lang === 'es' ? 'Desarrollo Guiado por Test (TDD)' : 'Test Driven Development (TDD)',
    },
    {
        id: 2,
        label: lang === 'es' ? 'Desarrollo de API' : 'API Development',
    },
    {
        id: 3,
        label: lang === 'es' ? 'Comunicación con otras API' : 'Third parties communication',
    },
    {
        id: 4,
        label: 'Laravel Nova',
    },
    {
        id: 5,
        label: lang === 'es' ? 'Gestión de colas en Laravel' : 'Laravel Queues',
    },
    {
        id: 6,
        label: 'Laravel Vapor',
    },
    {
        id: 7,
        label: lang === 'es' ? 'Integración continua' : 'Continuous Integration',
    },
    {
        id: 8,
        label: lang === 'es' ? 'Entrega continua' : 'Continuous Deployment',
    },
    {
        id: 9,
        label: 'Docker',
    },
    {
        id: 10,
        label: 'PHPCSFixer',
    },
    {
        id: 11,
        label: 'Nuxt',
    },
    {
        id: 12,
        label: 'Nuxt Content',
    },
]
</script>

<template>
    <div>
        <div class="ability__list">
            <div v-for="ability in abilities" :key="ability.id" class="ability__tag">
                {{ ability.label }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.ability__list {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
}

.ability__tag {
    font-size: .8em;
    padding: 1em;
    background-color: #555;
    color: white;
    border-radius: 1em;
    text-align: center;
}
</style>