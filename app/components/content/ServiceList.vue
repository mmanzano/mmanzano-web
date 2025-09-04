<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <section class="service__list">
        <ServiceListItem>
            {{ t('backend_development_title') }}
            <template #body>
                <div>
                    {{ t('backend_development_description') }}
                </div>
                <div class="diagram">
                    <TheAPICommunicationDiagram>
                        <p class="diagram__text">{{ t('http_request_caption') }}</p>
                    </TheAPICommunicationDiagram>
                </div>
            </template>
        </ServiceListItem>

        <ServiceListItem>
            {{ t('good_practices_title') }}
            <template #body>
                <div>
                    {{ t('good_practices_description') }}
                </div>
                <div class="diagram">
                    <TheTDDDiagram>
                      <template #test>
                        {{ t('tdd_diagram_test') }}
                      </template>
                      <template #code>
                        {{ t('tdd_diagram_code') }}
                      </template>
                      <template #refactor>
                        {{ t('tdd_diagram_refactor') }}
                      </template>
                      <template #caption>
                        <p class="diagram__text">{{ t('tdd_diagram_caption') }}</p>
                      </template>
                    </TheTDDDiagram>
                </div>
            </template>
        </ServiceListItem>
    </section>
</template>

<style scoped>
.service__list {
    justify-items: center;
    display: grid;
    gap: 2rem 10rem;
    grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
}

.diagram {
    margin-top: 1em;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}

.diagram__text {
    font-size: 0.8em;
    margin-top: 0.8em;
}
</style>
