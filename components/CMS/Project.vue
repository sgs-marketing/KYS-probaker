<script setup lang="ts">
import { Item, Project } from 'lesscms';
import { RegionData } from 'lesscms/dist/utils/types';

const props = defineProps<{
    project: Project
    region?: string
    regionId?: string

    collections: string[]
}>()

interface Region {
    id: string
    data: RegionData
}

async function loadProject() {
    const regions = await props.project.getRegions({})
    let regionId = undefined

    if (props.region) regionId = findRegionIdToLanguageCode(regions, props.region)
    if (props.regionId) regionId = props.regionId


    props.project.setRegion(regionId)

    const obj = await Promise.all(props.collections.map(async (id) => {
        const collection = props.project.getCollection(id)
        const items = await collection.getItems()

        return [id, items]
    }))

    const collections = Object.fromEntries(obj) as Record<string, Item[]>

    return {
        collections,
        project: props.project,
        regions: regions
    }
}

function findRegionIdToLanguageCode(regions: Region[], languageCode: string) {
    if (languageCode == 'en') return 'global'
    const region = regions.find(region => region.data.languages.includes(languageCode))
    
    if (region == undefined) throw createError({ 
        message: `Language code ${languageCode} not found`,
        statusCode: 404,
        fatal: true
    })

    return region?.id
}

const loadPromise = ref(loadProject())
const reload = ref('')

provide("project", loadPromise)
provide("reload", reload)


watch(() => props.region, () => {
    loadPromise.value = loadProject()
    reload.value = Date.now().toString()
})

watch(() => props.regionId, () => {
    loadPromise.value = loadProject()
    reload.value = Date.now().toString()
})
</script>

<template>
    <slot></slot>
</template> 

<style scoped lang="scss">

</style>