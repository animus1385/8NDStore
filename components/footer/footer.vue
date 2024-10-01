<template>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__content">
                <div class="footer__block">
                    <NuxtPicture class="footer__logo" src="/svg/logo.svg"></NuxtPicture>
                    <ul class="footer__list">
                        <li class="footer__descr">Все данные защищены авторскими правами.</li>
                        <li class="footer__copy">BnD Store | 2024</li>
                    </ul>
                </div>
                <div class="footer__block">
                    <span class="footer__title-depart-block">Ссылки:</span>
                    <ul class="footer__list">
                        <li class="footer__elem">
                            <a href="#" class="footer__link active">Помощь</a>
                        </li>
                        <li class="footer__elem">
                            <a href="#" class="footer__link">Лицензии</a>
                        </li>
                        <li class="footer__elem">
                            <a href="#" class="footer__link">Файлы Cookie</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__block">
                    <span class="footer__title-depart-block">Связаться с нами:</span>
                    <ul class="footer__list">
                        <li class="footer__elem">
                            <span>Telegram </span>
                            <a href="#" class="footer__link"></a>
                        </li>
                        <li class="footer__elem">
                            <span>Instagram</span>
                            <a href="#" class="footer__link"></a>
                        </li>
                        <li class="footer__elem">
                            <span>E-Mail : </span>
                            <a href="mailto:bndshopru@gmail.com" class="footer__link">bndshopru@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import './footer.scss';
</style>
