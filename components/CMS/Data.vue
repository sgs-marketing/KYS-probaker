<script setup lang="ts">
import { asyncComputed } from "@vueuse/core";
import { Item, Project } from "lesscms"
import { RegionData } from "lesscms/dist/utils/types";

const props = defineProps<{
    collection: string,
}>()

const emit = defineEmits<{
    (event: "single", value: Item): void
    (event: "items", value: Item[]): void
    (event: "regions", value: {
        id: string;
        data: RegionData;
    }[]): void
}>()

interface ProjectPromise {
    collections: Record<string, Item[]>
    project: Project
    regions: { 
        id: string;
        data: RegionData;
    }[]
}

const state = (inject("project") as Ref<Promise<ProjectPromise>> )

const project = asyncComputed<ProjectPromise>(async () => {
    return await state.value
}, await state.value)

const collection = computed(() => {
    return project.value.collections[props.collection]
}) 

const singleItem = computed(() => {
    return collection.value[0]
})

watchEffect(() => {
    emit("single", singleItem.value)
    emit("items", collection.value)
})

emit("regions", project.value.regions)
</script>

<template>
    <slot :project="project.project" :single="singleItem" :items="collection"></slot>
</template>

<style scoped lang="scss">

</style>