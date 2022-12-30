<template>
    <section class="list">
        <NuxtLink to="https://twitter.com/mmanzano" target="_blank">
            <div class="link">
                <img src="~/assets/icons/twitter.svg" alt="twitter logo" class="icon" />
                <div class="icon__text">Twitter</div>
            </div>
        </NuxtLink>
        <NuxtLink to="https://github.com/mmanzano" target="_blank">
            <div class="link">
                <img src="~/assets/icons/github.svg" alt="GitHub logo" class="icon" />
                <div class="icon__text">GitHub</div>
            </div>
        </NuxtLink>

        <NuxtLink to="https://www.linkedin.com/in/miguelmanzano" target="_blank">
            <div class="link">
                <img src="~/assets/icons/linkedin.svg" alt="LindedIn logo" class="icon" />
                <div class="icon__text">LinkedIn</div>
            </div>
        </NuxtLink>
        <NuxtLink to="https://www.flickr.com/photos/nesimo" target="_blank">

            <div class="link">
                <img src="~/assets/icons/flickr.svg" alt="Flickr logo" class="icon" />
                <div class="icon__text">Flickr</div>
            </div>
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/mmanzano/" target="_blank">
            <div class="link">
                <img src="~/assets/icons/instagram.svg" alt="Instagram logo" class="icon" />
                <div class="icon__text">Instagram</div>
            </div>
        </NuxtLink>
    </section>
</template>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;
}

.link {
    display: flex;
    gap: 0.5em;
    align-items: center;
    color: #555;
    padding: 0.8rem;
    border-radius: 0.4rem;
}

.icon {
    height: 40px;
}

.icon__text {
    display: none;
}

@media(min-width: 850px) {
    .icon__text {
        display: block;
    }
}
</style>