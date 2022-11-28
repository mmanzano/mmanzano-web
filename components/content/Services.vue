<template>
    <section>
        <ServiceCard>
            Desarrollo backend
            <template #body>
                <p>
                    En mi día a día desarrollo, en equipo, la parte backend de diversas aplicaciones que tienen una UI
                    Web o
                    Mobile.
                </p>
                <p class="diagram">
                    <TheAPICommunicationDiagram>
                        <p class="diagram_text">Petición HTTP</p>
                    </TheAPICommunicationDiagram>
                </p>
            </template>
        </ServiceCard>

        <ServiceCard>
            Buenas prácticas
            <template #body>
                <p>
                    Soy parte de diferentes comunidades que apuestan por la mejora continua.
                    Intento llevar estos aprendizajes a los
                    proyectos donde participo como desarrollador o lead.
                </p>
                <p class="diagram">
                    <TheTDDDiagram>
                        <p class="diagram_text">Desarrollo guiado por tests</p>
                    </TheTDDDiagram>
                </p>
            </template>
        </ServiceCard>
    </section>
</template>

<style scoped>
section {
    max-width: 1024px;
    margin: 2rem auto;
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

.diagram_text {
    font-size: 0.8em;
    margin-top: 0.8em;
}
</style>
