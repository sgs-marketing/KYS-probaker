<script setup lang="ts">
import { injectKeys } from '~/utils/types';
import { Project } from 'lesscms';

const project = new Project("https://less.systems/", {
    project: "iOoSLguEN6573OenkcCU",
    publicToken: "7cef66fb-4153-4af1-8b8f-82ce77f3b705",
})

const collections = [
    'home', 'aboutus', 'navigationBar',
    'products', 'shopingCart', 'faq',
    'footer', 'productsReviews', 'productView',
    'faq', 'faqQuestions', 'productFaq'
]

const route = useRoute()
const router = useRouter()

const lang = computed({
    get() {
        return route.params.lang as string
    },

    set(lang: string) {
        router.push({
            params: {
                lang: lang
            }
        })
        
        return lang
    }
})

provide(injectKeys.lang, lang)

</script>

<template>
<CMSProject :project="project" :collections="collections" :region="lang" >
    <NuxtLayout>  
        <NuxtPage />
    </NuxtLayout>
</CMSProject>
</template>

<style scoped lang="scss">

</style>