<script setup lang="ts">
import { injectKeys } from "~/utils/types";
import { Project } from "lesscms";

const project = new Project("https://less.systems/", {
    project: "zWmhcjNSjtC6caeOUkoC",
    publicToken: "443664a3-a674-43dc-97ba-36902209b1fb",
})


const collections = [
    "header"
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
<CMSProject :project="project" :collections="collections" :region="lang">
    <Header></Header>
    <NuxtLayout>  
        <NuxtPage />
    </NuxtLayout>
</CMSProject>
</template>

<style scoped lang="scss">

</style>