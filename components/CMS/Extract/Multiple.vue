<script setup lang="ts" generic="K extends string">
import { asyncComputed } from '@vueuse/core';
import { Item  } from 'lesscms';
import { PosibleContentTypes } from 'lesscms/dist/utils/types';

const prop = defineProps<{
    items: Item[]

    keys: Readonly<K[]>

    ids?: string[]
}>()

const reload = inject('reload') as Ref<string>

const emit = defineEmits<{
    (event: 'data', data: Record<K, PosibleContentTypes | null>[]): void
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
const initalData = await getMuiltipleDataFromItem(items.value, prop.keys)

const itemsData = asyncComputed(async () => {
    reload.value
    if (!hasLoaded) {
        hasLoaded = true 
        return initalData
    }

    return await getMuiltipleDataFromItem(items.value, prop.keys)
}, initalData)


async function getMuiltipleDataFromItem(items: Item[], keys: Readonly<K[]>): Promise<Record<K, PosibleContentTypes | null>[]>  {
    const values = await Promise.all(items.map(async (item) => {
        return await getDataFromItem(item, keys)
    }));
    
    return values
}

async function getDataFromItem(item: Item, keys: Readonly<K[]>): Promise<Record<K, PosibleContentTypes | null>>  {
    let data = {} as Record<K, PosibleContentTypes | null>

    for (const key of keys) {
        if (key == 'id') {
            data[key as K] = item.id
        }
        data[key as K] = await item.getContent(key, {autoFileURL: true});
    }

    return data
}

watchEffect(() => {
    emit('data', itemsData.value)
})
</script>

<template>
    <slot :data="itemsData"></slot>
</template>

<style scoped lang="scss">

</style>