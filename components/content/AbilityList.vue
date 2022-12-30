<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
const abilities = {
    'Backend': [
        {
            id: 1,
            label: lang === 'es' ? 'Desarrollo de API' : 'API Development',
        },
        {
            id: 2,
            label: lang === 'es' ? 'Comunicación con API de terceros' : 'Third parties communication',
        },
        {
            id: 3,
            label: 'Docker',
        },
        {
            id: 4,
            label: 'PHPCSFixer',
        },
    ],
    'Laravel': [
        {
            id: 5,
            label: 'Laravel Nova',
        },
        {
            id: 6,
            label: lang === 'es' ? 'Gestión de colas en Laravel' : 'Laravel Queues',
        },
        {
            id: 7,
            label: 'Laravel Vapor',
        },
    ],
    'Extreme Programming': [
        {
            id: 8,
            label: lang === 'es' ? 'Desarrollo Guiado por Test (TDD)' : 'Test Driven Development (TDD)',
        },
        {
            id: 9,
            label: lang === 'es' ? 'Desarrollo en parejas' : 'Pair Programming',
        },
        {
            id: 10,
            label: lang === 'es' ? 'Integración continua' : 'Continuous Integration',
        },
        {
            id: 11,
            label: lang === 'es' ? 'Entrega continua' : 'Continuous Deployment',
        },
    ],
    'Frontend': [
        {
            id: 12,
            label: 'Nuxt',
        },
        {
            id: 13,
            label: 'Nuxt Content',

        },
    ]
}
</script>

<template>
    <div>
        <div v-for="(categoryList, category) in abilities" :key="category">
            <h2 class="title">{{ category }}</h2>
            <div class="list">
                <div v-for="ability in categoryList" :key="ability.id" class="element">
                    {{ ability.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    width: fit-content;
    padding: 0.5em 1em;
    border-radius: 1em;
    color: #eee;
    background-color: #666;
    margin: 1.5em auto 1em;
    text-align: center;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
}

.element {
    text-align: center;
    color: #666;
    padding: 0.8rem;
    border-radius: 1rem;
    border: #999 solid 1px;
}
</style>