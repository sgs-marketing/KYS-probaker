<script setup lang="ts" generic="O extends Record<string, PosibleContentTypes>">
import { asyncComputed } from "@vueuse/core";
import { PosibleContentTypes } from "lesscms/dist/utils/types";
import { findItem, findMultipleItems, getDataFromItem, getMuiltipleItems, ReturnType, ProjectPromise } from "../utils";

const prop = defineProps<{
    collection: string,
    defaults: O
    id?: string
    ids?: string[]
}>()

const emit = defineEmits<{
    (event: 'collection', value: ReturnType[]): void
    (event: 'data', value: ReturnType): void
}>()

const state = (inject("project") as Ref<Promise<ProjectPromise>> )
const reload = inject('reload') as Ref<string>

const project = asyncComputed<ProjectPromise>(async () => {
    return await state.value
}, await state.value)

const collection = computed(() => {
    return project.value.collections[prop.collection]
})

const item = computed(() => {
    let foundItems = findItem(collection.value, prop.id)
    if (Array.isArray(foundItems)) {
        return foundItems[0]
    }
    return foundItems
})

const items = computed(() => {
    let foundItems = findMultipleItems(collection.value, prop.ids)
    if (!Array.isArray(foundItems)) {
        return [foundItems]
    }

    return foundItems
})

let hasLoaded = false
const initalData = await getDataFromItem(item.value, prop.defaults)
const initalCollection = await getMuiltipleItems(items.value, prop.defaults)

const itemData = asyncComputed<O>(async () => {
    reload.value
    if (!hasLoaded) {
        hasLoaded = true 
        return initalData as O
    }
    
    return await getDataFromItem(item.value, prop.defaults) as O
}, initalData as O)

let hasLoadedCollection = false
const collectionData = asyncComputed<O[]>(async () => {
    reload.value
    if (!hasLoadedCollection) {
        hasLoadedCollection = true 
        return initalCollection as O[]
    }
    
    return await getMuiltipleItems(items.value, prop.defaults) as O[]
}, initalCollection as O[])

watchEffect(() => {
    emit('data', itemData.value)
    emit('collection', collectionData.value)
})
</script>

<template>
    <slot :data="itemData" :collection="collectionData"></slot>
</template>

<style scoped lang="scss">

</style>