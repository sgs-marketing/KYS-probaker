<script setup lang="ts">
const defaultContent = {
    headerTitle: "",
    headerSpanTitle: "",
}
</script>

<template>
<CMSExtractSingle collection="home" :defaults="defaultContent" v-slot="{ data }">
   <h1>{{ data.headerTitle }}</h1>
   <h1>{{ data.headerSpanTitle }}</h1>
</CMSExtractSingle>
</template>

<style scoped lang="scss">

</style>