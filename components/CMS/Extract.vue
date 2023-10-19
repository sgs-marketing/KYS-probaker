<script setup lang="ts" generic="O extends Record<string, PosibleContentTypes>">
import { asyncComputed } from "@vueuse/core";
import { Item } from "lesscms";
import { PosibleContentTypes } from "lesscms/dist/utils/types";
import { getDataFromItem, findItem } from "./utils";

const prop = defineProps<{
    item: Item | Item[]
    defaults: O

    id?: string
}>()

const emit = defineEmits<{
    (event: "data", data: O): void
}>()

const reload = inject("reload") as Ref<string>

const item = computed(() => {
    if (Array.isArray(prop.item)) {
        const items =  findItem(prop.item, prop.id)

        if (Array.isArray(items)) {
            return items[0]
        } else {
            return items
        }
    }


    return prop.item
})

let hasLoaded = false
const initalData = await getDataFromItem<O>(item.value, prop.defaults)

const itemData = asyncComputed(async () => {
    reload.value
    if (!hasLoaded) {
        hasLoaded = true 
        return initalData
    }
    
    return await getDataFromItem<O>(item.value, prop.defaults)
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