<script setup lang="ts">
import { injectKeys } from '@/utils/types';

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
    <NuxtLink :to="`/${lang}/`" data-plain><h1 data-semibold>{{ data.title }}</h1></NuxtLink>

    <div>
        <NuxtLink :to="`/${lang}/products`" data-plain><h4 data-semibold>{{ data.productLink }}</h4></NuxtLink>
        <NuxtLink :to="`/${lang}/about`" data-plain><h4 data-semibold>{{ data.aboutLink }}</h4></NuxtLink>

        <HeaderLocale />
    </div>
</nav>
</CMSExtractSingle>
</template>

<style scoped lang="scss">
.navigtaion {
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
}
</style>