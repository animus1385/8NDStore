<template>
    <div class="pay-page">
        <div class="pay-page__block ">
            <NuxtPicture class="pay-page__fone" src="/img/fone-pay.png"></NuxtPicture>
            <ComponentHeader />
            <ComponentPay class="content" />
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
.pay-page {
    &__block {
        @apply relative h-full flex flex-col;
    }
    &__fone {
        @apply absolute left-0 right-0 z-[-1];
    }
}
</style>
