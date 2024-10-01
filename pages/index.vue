<template>
    <div class="index-page">
        <div class="index-page__block-1">
            <NuxtPicture class="index-page__block-1-fone" src="/img/fone-hero.png"></NuxtPicture>
            <ComponentHeader />
            <ComponentHero />
        </div>
        <ComponentAboutUs />
        <div class="index-page__block-2">
            <NuxtPicture class="index-page__block-2-fone" src="/img/fone-advantages.png"></NuxtPicture>
            <ComponentAdvantages />
            <ComponentFooter />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'empty',
});
</script>

<style scoped lang="scss">
.index-page {
    @apply grid;
    &__block-1,
    &__block-2 {
        @apply relative;
    }
    &__block-1-fone,
    &__block-2-fone {
        @apply absolute left-0 right-0 z-[-1];
    }
}
</style>
