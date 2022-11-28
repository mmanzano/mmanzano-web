<template>
    <section>
        <ServiceCard>
            Desarrollo backend
            <template #body>
                En mi día a día desarrollo, en equipo, la parte backend de diversas aplicaciones que tienen una UI Web o
                Mobile.
            </template>
        </ServiceCard>

        <ServiceCard>
            Buenas prácticas
            <template #body>
                Soy parte de diferentes comunidades que apuestan por la mejora continua.
                Intento llevar estos aprendizajes a los
                proyectos donde participo como desarrollador o lead.
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
