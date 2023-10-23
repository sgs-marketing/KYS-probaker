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


const teststuff = [
    {
        name: "fisk",
        code: "test",
        icon: "no"
    },
    {
        name: "test2",
        code: "test2",
        icon: "sv"
    },
    {
        name: "test3",
        code: "test3",
        icon: "fr"
    },
    {
        name: "test4",
        code: "test4",
        icon: "sv"
    },
    {
        name: "test5",
        code: "test5",
        icon: "sv"
    }
]
</script>

<template>
<CMSProject :project="project" :collections="collections" :region="lang">
    <Header></Header>
    <NuxtLayout>  
        <NuxtPage />
    </NuxtLayout>
</CMSProject>

<Selector 
    :items="teststuff" 
    current-item-code="test" 
    :seachable="true" 
    
    image-path="/flags/4x3/"
    image-type=".svg"
/>
</template>

<style scoped lang="scss">

</style>