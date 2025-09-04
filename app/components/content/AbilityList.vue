<script setup lang="ts">
const { t } = useI18n();

const abilities = [
    {
        'category': t('abilities_backend'),
        'ability_list': [
            {
                id: 1,
                label: t('abilities_api_development'),
            },
            {
                id: 2,
                label: t('abilities_third_parties_communication'),
            },
            {
                id: 3,
                label: t('abilities_docker'),
            },
            {
                id: 4,
                label: t('abilities_php_cs_fixer'),
            },
        ],
    },
    {
        'category': t('abilities_laravel'),
        'ability_list': [
            {
                id: 1,
                label: t('abilities_laravel_nova'),
            },
            {
                id: 2,
                label: t('abilities_laravel_queues'),
            },
            {
                id: 3,
                label: t('abilities_laravel_vapor'),
            },
        ],
    },
    {
        'category': t('abilities_extreme_programming'),
        'ability_list': [
            {
                id: 1,
                label: t('abilities_test_driven_development'),
            },
            {
                id: 2,
                label: t('abilities_pair_programming'),
            },
            {
                id: 3,
                label: t('abilities_continuous_integration'),
            },
            {
                id: 4,
                label: t('abilities_continuous_deployment'),
            },
        ],
    },
    {
        'category': t('abilities_frontend'),
        'ability_list': [
            {
                id: 12,
                label: t('abilities_nuxt'),
            },
            {
                id: 13,
                label: t('abilities_nuxt_content'),

            },
        ]
    }
];
</script>

<template>
    <div>
        <div class="group" v-for="abilityGroup in abilities" :key="abilityGroup.category">
            <h2 class="title">{{ abilityGroup.category }}</h2>
            <div class="list">
                <div v-for="ability in abilityGroup.ability_list" :key="ability.id" class="element">
                    {{ ability.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.group {
    margin-top: 2em;
    margin-bottom: 1em;
}

.title {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-bold);
    width: fit-content;
    padding: 0.5em 1em;
    border-radius: 1em;
    background-color: var(--menu-button-bg-color-hover);
    margin: 1em auto;
    text-align: center;

}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    font-size: 1rem;
}

.element {
    font-size: var(--font-size-1);
    background-color: var(--menu-button-bg-color);
    text-align: center;
    padding: 0.7em 1.2em;
    border-radius: 1rem;
}
</style>