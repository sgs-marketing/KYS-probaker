<script setup lang="ts">
import { injectKeys } from '@/utils/types';

const router = useRouter()

const defaultContent = {
    title: '',
    productLink: '',
    aboutLink: ''
}

const lang = inject(injectKeys.lang)
</script>

<template>
<CMSExtractSingle collection="header" :defaults="defaultContent" v-slot="{ data }">
<nav class="navigtaion">
    <NuxtLink :to="`/${lang}/`" data-plain><h1 data-semibold data-contrast>{{ data.title }}</h1></NuxtLink>

    <div>
        <NuxtLink :to="`/${lang}/about`" data-plain><h4 data-contrast>{{ data.aboutLink }}</h4></NuxtLink>
        <button data-weak-hover @click="router.push(`/${lang}/products`)">{{ data.productLink }}</button>

        <HeaderLocale />

        <img src="/icons/cart.svg" alt="">
    </div>
</nav>
</CMSExtractSingle>
</template>

<style scoped lang="scss">
.navigtaion {
    background-color: var(--primary);

    display: flex;
    justify-content: space-between;
    padding: 1rem var(--page-padding-wall);

    > div {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        h4 {
            &:hover {
                text-decoration: underline;
                text-underline-offset: 0.2rem;
                text-decoration-thickness: 0.2rem;

            }
        }
    }
}
</style>