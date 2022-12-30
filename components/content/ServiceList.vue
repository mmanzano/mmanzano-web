<script setup lang="ts">
const { lang } = useSupportedNavigatorLanguage()
const backendDevelopmentTitle = lang === 'es' ? 'Desarrollo backend' : 'Backend Development'
const backendDevelopmentDescription = lang === 'es'
    ? "En mi día a día desarrollo, en equipo, la parte backend de diversas aplicaciones que tienen una página web o una aplicación móvil."
    : "I usually develop, within a team, the backend side of several applications which have a web page or a mobile app."
const httpRequestCaption = lang === 'es' ? 'Petición HTTP' : 'HTTP Request'
const goodPracticesTitle = lang === 'es' ? 'Buenas prácticas' : 'Good practices'
const goodPracticesDescription = lang === 'es'
    ? 'Soy parte de diferentes comunidades que apuestan por la mejora continua. Intento llevar estos aprendizajes a los proyectos donde participo como desarrollador o lead.'
    : 'I belong to several communities which work in continuous improvement. I try to bring those learnings to the project where I work as a developer or a lead.'
const tddDiagramCaption = lang === 'es' ? 'Desarrollo guiado por tests (TDD)' : 'Test Driven Development'
</script>

<template>
    <section class="service__list">
        <ServiceListItem>
            {{ backendDevelopmentTitle }}
            <template #body>
                <div>
                    {{ backendDevelopmentDescription }}
                </div>
                <div class="diagram">
                    <TheAPICommunicationDiagram>
                        <p class="diagram__text">{{ httpRequestCaption }}</p>
                    </TheAPICommunicationDiagram>
                </div>
            </template>
        </ServiceListItem>

        <ServiceListItem>
            {{ goodPracticesTitle }}
            <template #body>
                <div>
                    {{ goodPracticesDescription }}
                </div>
                <div class="diagram">
                    <TheTDDDiagram>
                        <p class="diagram__text">{{ tddDiagramCaption }}</p>
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
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
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
