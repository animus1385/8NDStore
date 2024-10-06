<template>
    <header
        class="header"
        :class="{
            'type-2': route.fullPath !== '/',
        }"
    >
        <div class="header__container container">
            <div class="header__content">
                <UButton
                    class="header__burger"
                    variant="ghost"
                    size="xl"
                    color="white"
                    icon="custom-icons:burger-open"
                    @click="isOpen = true"
                />
                <div class="header__logo">
                    <UButton variant="ghost" to="/" size="xl" icon="custom-icons:logo"></UButton>
                </div>

                <nav class="header__nav">
                    <ul class="header__list" v-if="route.fullPath == '/'">
                        <li class="header__elem">
                            <a href="#" class="header__link">ОТЗЫВЫ</a>
                        </li>
                        <li class="header__elem">
                            <a href="#" class="header__link">Язык</a>
                        </li>
                        <li class="header__elem">
                            <a href="#" class="header__link">о нас</a>
                        </li>
                    </ul>
                    <ul v-else class="header__list">
                        <li class="header__elem"><a class="header__link btn-nav" href="#">Пополнение Баланса</a></li>
                        <li class="header__elem"><a class="header__link btn-nav" href="#">Покупка Игры</a></li>
                    </ul>
                </nav>
                <div class="header__btns">
                    <UButton class="header__balance" variant="ghost">БАЛАНС 12.344 </UButton>
                    <UButton class="header__akk" icon="custom-icons:user-header" variant="ghost"> </UButton>
                </div>
            </div>
        </div>
        <USlideover v-model="isOpen" side="left" class="mobile-menu" :ui="{ background: 'bg-yellow' }">
            <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1 ' }, ring: '', divide: '' }">
                <template #header>
                    <div class="mobile-menu__header">
                        <UButton class="mobile-menu__akk mobile" icon="custom-icons:user-header" variant="ghost"> </UButton>
                        <UButton class="mobile-menu__logo-mobile" size="xl" variant="ghost" icon="custom-icons:logo"></UButton>

                        <UButton
                            class="mobile-menu__close"
                            color="gray"
                            variant="ghost"
                            icon="i-heroicons-x-mark-20-solid"
                            @click="isOpen = false"
                        />
                    </div>
                </template>
                <UButton class="mobile-menu__balance" variant="ghost">БАЛАНС 12.344 </UButton>
                <nav class="mobile-menu__nav">
                    <ul class="mobile-menu__list">
                        <li class="mobile-menu__elem">
                            <a href="#" class="mobile-menu__link">ОТЗЫВЫ</a>
                        </li>
                        <li class="mobile-menu__elem">
                            <a href="#" class="mobile-menu__link">Язык</a>
                        </li>
                        <li class="mobile-menu__elem">
                            <a href="#" class="mobile-menu__link">о нас</a>
                        </li>
                    </ul>
                </nav>
            </UCard>
        </USlideover>
    </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const route = useRoute();
console.log(route);
</script>

<style scoped lang="scss">
@import './header.scss';
</style>
