<template>
    <section class="pay">
        <div class="pay__container container">
            <div class="pay__content">
                <div class="pay__left">
                    <div class="pay__hot">
                        <h2 class="pay__hot-list-title">ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</h2>
                        <ul class="pay__hot-list">
                            <li class="pay__hot-elem">
                                <div class="pay__hot-left">
                                    <NuxtPicture src="/img/pay-hot-1.png"></NuxtPicture>
                                    <span>1779 Р</span>
                                </div>
                                <h3 class="pay__hot-title">PUBG:BATTLEGROUNDS</h3>
                            </li>
                            <li class="pay__hot-elem">
                                <div class="pay__hot-left">
                                    <NuxtPicture src="/img/pay-hot-2.png"></NuxtPicture>
                                    <span>1999 Р</span>
                                </div>
                                <h3 class="pay__hot-title">GrandTheftAuto V</h3>
                            </li>
                            <li class="pay__hot-elem">
                                <div class="pay__hot-left">
                                    <NuxtPicture src="/img/pay-hot-3.png"></NuxtPicture>
                                    <span>1449 Р</span>
                                </div>
                                <h3 class="pay__hot-title">GrayZone : WarFare</h3>
                            </li>
                        </ul>
                    </div>
                    <div class="pay__skins">
                        <ul class="pay__skins-list">
                            <li class="pay__skins-elem">
                                <NuxtPicture class="pay__skins-left" src="/img/pay-skins-1.png"></NuxtPicture>
                                <div class="pay__skins-price">
                                    <div class="pay__skins-old-price">
                                        <div class="pay__skins-old-price-text">
                                            1449
                                            <NuxtPicture class="pay__crossed-out" src="/svg/crossedOut.svg"></NuxtPicture>
                                        </div>
                                    </div>

                                    <span class="pay__skins-new-price">1099 Р</span>
                                </div>
                            </li>
                            <li class="pay__skins-elem">
                                <NuxtPicture class="pay__skins-left" src="/img/pay-skins-2.png"></NuxtPicture>
                                <div class="pay__skins-price">
                                    <div class="pay__skins-old-price">
                                        <div class="pay__skins-old-price-text">
                                            1740
                                            <NuxtPicture class="pay__crossed-out" src="/svg/crossedOut.svg"></NuxtPicture>
                                        </div>
                                    </div>
                                    <span class="pay__skins-new-price">1399 Р</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="pay__form">
                    <div class="pay__middle-block">
                        <div class="pay__form-tab">
                            <UButton class="pay__form-tab-btn" variant="ghost">
                                <div class="pay__form-tab-btn-text">
                                    <span>По Логину</span>
                                    <span>Комиссия от 16 %</span>
                                </div>
                                <Icon class="pay__form-tab-icon" name="custom-icons:user" />
                            </UButton>
                            <UButton class="pay__form-tab-btn" variant="ghost">
                                <div class="pay__form-tab-btn-text">
                                    <span>Скинами</span>
                                    <span>Комиссия от 0 %</span>
                                </div>
                                <Icon class="pay__form-tab-icon" name="custom-icons:mushket" />
                            </UButton>
                        </div>
                        <UForm :schema="schema" :state="state" class="pay__form-block" @submit="onSubmit">
                            <UFormGroup class="pay__block-form" name="login">
                                <UInput class="input" variant="none" v-model="state.login" placeholder="Логин Steam" />
                            </UFormGroup>
                            <UFormGroup name="sum">
                                <div class="pay__sum-and-lang-block">
                                    <div class="pay__sum-form" label="Сумма пополнения :">
                                        <UInput
                                            class="pay__input-sum"
                                            v-model="state.sum"
                                            variant="none"
                                            type="sum"
                                            placeholder="Введите сумму..."
                                        />
                                        <UIcon class="pay__line" name="custom-icons:line"></UIcon>
                                        <div class="pay__range-block">
                                            <div class="pay__range-header">
                                                <div>0 %</div>
                                                <div>10 %</div>
                                                <div>9 %</div>
                                                <div>8 %</div>
                                            </div>
                                            <URange class="pay__range" color="indigo" size="sm" :step="25" :max="75" v-model="range" />
                                            <div class="pay__range-footer">
                                                <div>100</div>
                                                <div>1000</div>
                                                <div>5000</div>
                                                <div>10 000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pay__lang-btns">
                                        <UButton icon="custom-icons:ru" variant="ghost" size="xl" color="white" />
                                        <UButton icon="custom-icons:uk" variant="ghost" size="xl" color="white" />
                                        <UButton icon="custom-icons:kz" variant="ghost" size="xl" color="white" />
                                    </div>
                                </div>
                            </UFormGroup>
                            <UFormGroup class="pay__block-form" name="promocod">
                                <UInput class="input" variant="none" v-model="state.promocod" placeholder="Промокод" />
                            </UFormGroup>
                            <div class="pay__coin-block">
                                <span class="pay__coin-title">БНДкоинами :</span>
                                <div class="pay__price-block">
                                    <div class="pay__price">
                                        <Icon class="pay__coin-icon" name="custom-icons:coin" />
                                        <span class="pay__coin-count">1207 </span>
                                        <span class="pay__coin-precent">-1 %</span>
                                    </div>

                                    <span class="pay__coin-cart">/ Картой 1220</span>
                                </div>
                                <p class="pay__bonus-register">Бонус для зарегистрированных пользователей</p>
                            </div>

                            <UFormGroup class="pay__form-method" name="method">
                                <div class="pay__form-pay-btns">
                                    <UButton
                                        class="pay__form-btn-coin btn"
                                        :class="{ active: state.method == 'coin' }"
                                        variant="ghost"
                                        @click="() => (state.method = 'coin')"
                                    >
                                        БНДкоинами
                                        <UIcon name="custom-icons:coin"></UIcon>
                                    </UButton>
                                    <UButton
                                        class="pay__form-btn-cart btn"
                                        :class="{ active: state.method == 'cart' }"
                                        variant="ghost"
                                        @click="() => (state.method = 'cart')"
                                        >Картой
                                        <UIcon name="custom-icons:carts-pay"></UIcon>
                                    </UButton>
                                </div>
                            </UFormGroup>
                            <UButton class="pay__form-btn-submit" color="white" variant="ghost" type="submit"> Оплатить 1220 </UButton>
                            <p class="pay__form-policy">
                                Нажимая “Оплатить”, вы принимаете <a href="#">Правила пользования сайтом</a>  и
                                <a> Политику конфиденциальности</a>
                            </p>
                        </UForm>
                    </div>
                    <div class="pay__right">
                        <div class="pay__tabs">
                            <UButton
                                class="pay__tab-instruction btn"
                                :class="{ active: tabsActive == 'instruction' }"
                                variant="ghost"
                                @click="() => (tabsActive = 'instruction')"
                            >
                                ИНСТРУКЦИЯ
                            </UButton>
                            <UButton
                                class="pay__tab-faq btn"
                                :class="{ active: tabsActive == 'faq' }"
                                variant="ghost"
                                @click="() => (tabsActive = 'faq')"
                                >FAQ
                            </UButton>
                        </div>
                        <ul class="pay__instruction">
                            <li>Введите свой логин аккаунта. <a href="#"> (как узнать логин?)</a></li>
                            <li>Введите сумму, на которую хотите пополнить баланс Steam.</li>
                            <li>Проверьте, что указали именно логин, а неникнейм.</li>
                            <li>Нажмите кнопку <strong> «Пополнить».</strong></li>
                            <li>Вы перейдете на страницу, где необходимо выбрать метод оплаты.</li>
                            <li>
                                После успешной оплаты деньги поступят набаланс аккаунта в течение 2-15 минут.При возникновении вопросов
                                <a href="#"> свяжитесь с поддержкой</a>
                            </li>
                        </ul>
                        <div class="pay__commission">
                            <span>8 %</span>
                            <p>одна из самых низких комиссий на рынке</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';

const tabsActive = ref('instruction');
const range = ref(0);
const schema = object({
    login: string().required('Это поле обязательно'),
    sum: string().min(100, 'введите минимум 100р').required('Это поле обязательно'),
    promocod: string().required('Это поле обязательно'),
    method: string().required('Это поле обязательно'),
});

type Schema = InferType<typeof schema>;

const state = reactive({
    login: '',
    sum: '',
    promocod: '',
    method: 'coin',
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    console.log(event.data);
}
</script>

<style scoped lang="scss">
@import './pay.scss';
</style>
