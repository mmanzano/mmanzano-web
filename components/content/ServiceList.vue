<template>
    <section>
        <ServiceListItem>
            Desarrollo backend
            <template #body>
                <div>
                    En mi día a día desarrollo, en equipo, la parte backend de diversas aplicaciones que tienen una UI
                    Web o
                    Mobile.
                </div>
                <div class="diagram">
                    <TheAPICommunicationDiagram>
                        <p class="diagram__text">Petición HTTP</p>
                    </TheAPICommunicationDiagram>
                </div>
            </template>
        </ServiceListItem>

        <ServiceListItem>
            Buenas prácticas
            <template #body>
                <div>
                    Soy parte de diferentes comunidades que apuestan por la mejora continua.
                    Intento llevar estos aprendizajes a los
                    proyectos donde participo como desarrollador o lead.
                </div>
                <div class="diagram">
                    <TheTDDDiagram>
                        <p class="diagram__text">Desarrollo guiado por tests</p>
                    </TheTDDDiagram>
                </div>
            </template>
        </ServiceListItem>
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

.diagram__text {
    font-size: 0.8em;
    margin-top: 0.8em;
}
</style>
