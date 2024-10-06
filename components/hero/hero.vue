<template>
    <section class="hero">
        <NuxtLink to="/pay" class="hero__container container">
            <ul class="hero__list">
                <li class="hero__elem">
                    <picture class="hero__picture">
                        <img class="hero__img" src="/img/left-hero.png" alt="left-hero.png" />
                    </picture>
                    <p class="hero__title">мобильные и пк игры</p>
                </li>
                <li class="hero__elem">
                    <picture class="hero__picture">
                        <img class="hero__img" src="/img/middle-hero.png" alt="middle-hero.png" />
                    </picture>
                    <p class="hero__title">STEAM ПОПОЛНЕНИЯ И ГИФТЫ</p>
                </li>
                <li class="hero__elem">
                    <picture class="hero__picture">
                        <img class="hero__img" src="/img/right-hero.png" alt="right-hero.png" />
                    </picture>
                    <p class="hero__title">БИРЖА СКИНОВ</p>
                </li>
            </ul>
        </NuxtLink>
    </section>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
@import './hero.scss';
</style>
