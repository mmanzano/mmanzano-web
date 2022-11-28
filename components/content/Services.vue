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
                <TheAPICommunicationDiagram>
                    <p class="mt-4 mb-2">Petición HTTP:</p>
                </TheAPICommunicationDiagram>
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
                <TheTDDDiagram>
                    <p class="mt-4 mb-2">Desarrollo guiado por tests:</p>
                </TheTDDDiagram>
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
</style>
