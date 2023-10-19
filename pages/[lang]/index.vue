<script setup lang="ts">
const defaultContent = {
    headerTitle: "",
    headerSpanTitle: "",
    headerImage: []
}
</script>

<template>
<CMSExtractSingle collection="home" :defaults="defaultContent" v-slot="{ data }">
   <h1>{{ data.headerTitle }}</h1>
   <h1>{{ data.headerSpanTitle }}</h1>
   <p v-for="image in data.headerImage">{{ image }}</p>
</CMSExtractSingle>
</template>

<style scoped lang="scss">

</style>