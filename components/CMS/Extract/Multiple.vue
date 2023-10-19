<script setup lang="ts" generic="O extends Record<string, PosibleContentTypes>">
import { asyncComputed } from "@vueuse/core";
import { Item } from "lesscms";
import { PosibleContentTypes } from "lesscms/dist/utils/types";
import { getMuiltipleItems } from "../utils";


const prop = defineProps<{
    items: Item[]

    defaults: O
    ids?: string[]
}>()

const reload = inject("reload") as Ref<string>

const emit = defineEmits<{
    (event: "data", data: O[]): void
}>()


const findItems = (items: Item[]) => {
    if (prop.ids) {
        return items.filter(item => prop.ids?.includes(item.id)) as Item[]
    }
    
    return items as Item[]
}
 
const items = computed(() => {
    return findItems(prop.items)
})

let hasLoaded = false
const initalData = await getMuiltipleItems<O>(items.value, prop.defaults)

const itemsData = asyncComputed(async () => {
    reload.value
    if (!hasLoaded) {
        hasLoaded = true 
        return initalData
    }

    return await getMuiltipleItems<O>(items.value, prop.defaults)
}, initalData)

watchEffect(() => {
    emit("data", itemsData.value)
})
</script>

<template>
    <slot :data="itemsData"></slot>
</template>

<style scoped lang="scss">

</style>