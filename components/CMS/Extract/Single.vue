<script setup lang="ts" generic="O extends Record<string, PosibleContentTypes>">
import { asyncComputed } from "@vueuse/core";
import { PosibleContentTypes } from "lesscms/dist/utils/types";
import { getDataFromItem, ProjectPromise } from "../utils";

const prop = defineProps<{
    collection: string
    defaults: O
}>()

const emit = defineEmits<{
    (event: "data", data: O): void
}>()

const initalState = inject("project") as Ref<Promise<ProjectPromise>>
const reload = inject("reload") as Ref<string>


const project = asyncComputed<ProjectPromise>(async () => {
    return await initalState.value
}, await initalState.value)

const singleItem = computed(() => {
    return project.value.collections[prop.collection][0]
})

let hasLoaded = false
const initalData = await getDataFromItem<O>(singleItem.value, prop.defaults)

const itemData = asyncComputed(async () => {
    reload.value
    if (!hasLoaded) {
        hasLoaded = true 
        return initalData
    }
    
    return await getDataFromItem<O>(singleItem.value, prop.defaults)
}, initalData)


watchEffect(() => {
    emit("data", itemData.value)
})
</script>

<template>
    <slot :data="itemData"></slot>
</template>

<style scoped lang="scss">

</style>