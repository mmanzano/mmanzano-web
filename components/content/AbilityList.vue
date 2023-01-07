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
]
</script>

<template>
    <div>
        <div v-for="abilityGroup in abilities" :key="abilityGroup.category">
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