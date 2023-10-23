<script setup lang="ts">
const props = defineProps<{
    currentItemCode: string

    items: {
        code: string
        name: string
        icon?: string
        [x: string]: any
    }[]

    seachable: boolean

    imagePath?: string
    imageType?: string
}>()

const currentItem = computed(() => {
    return props.items.find(item => item.code === props.currentItemCode)
})
</script>

<template>
<div class="selector">
    <div class="display" data-border-accent data-border-radius data-box data-weak-hover>
        <div>
            <img :src="`${imagePath}${currentItem.icon}${imageType}`" v-if="currentItem?.icon">
            <p>{{ currentItem?.name }}</p>
        </div>

        <img src="/icons/arrow.svg" alt="arrow" :data-open="false">
    </div>

    <div class="options" data-border-accent data-border-radius>
        <div class="search" v-if="seachable" data-border-radius data-box data-hover>
            <input type="text" placeholder="Search" data-plain>
            <img src="/icons/search.svg" alt="">
        </div>

        <div class="items">
            <div v-for="item in items" :key="item.code" data-box data-hover>
                <img :src="`${imagePath}${item.icon}${imageType}`" v-if="item.icon">
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.selector {
    width: 18rem;
    position: relative;

    .display {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        > img {
            transition: all 0.2s ease;
            width: 1.125rem;

            &[data-open="false"] {
                transform: rotate(-90deg);
            }
        }
    }

    .options {
        width: 18rem;
        
        position: absolute;
        top: 4rem;

        overflow: hidden;

        display: flex;
        flex-direction: column;

        .items {
            display: flex;
            flex-direction: column;
            
            overflow-y: scroll;
            height: 8rem;
            
            > div {
                border-bottom: 1px solid var(--accent);
                
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            &::-webkit-scrollbar {
                width: .3rem;
            }

            &::-webkit-scrollbar-track {
                background: var(--boxcolor);
            }

            &::-webkit-scrollbar-thumb {
                background: var(--accent);
                border-radius: var(--border-radius);
            }

            &::-webkit-scrollbar-thumb:hover {
                background: var(--primary);
            }
        }
        

        .search {
            display: flex;
            align-items: center;
            gap: 0.3rem;

            border-bottom: 1px solid var(--accent);
        }
    }

    img {
        height: 1.125rem;
    }
}
</style>