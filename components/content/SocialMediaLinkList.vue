<template>
    <section class="social-media-link-list">
        <SocialMediaLinkListItem media="Twitter" profile="https://twitter.com/mmanzano" />
        <SocialMediaLinkListItem media="GitHub" profile="https://github.com/mmanzano" />
        <SocialMediaLinkListItem media="LinkedIn" profile="https://www.linkedin.com/in/miguelmanzano" />
        <SocialMediaLinkListItem media="Flickr" profile="https://www.flickr.com/photos/nesimo" />
        <SocialMediaLinkListItem media="Instagram" profile="https://www.instagram.com/mmanzano/" />
    </section>
</template>

<style scoped>
.social-media-link-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    width: 100%;
}
</style>