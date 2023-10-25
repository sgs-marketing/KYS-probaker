<script setup lang="ts">

</script>

<template>
    <main>
        <header>
        </header>
        <section>
            <!-- Eksempler på contentblock med background og uten background. -->
            <ContentBlock data-box-background />
            <ContentBlock />
        </section>
    </main>  
</template>

<style scoped lang="scss">
    header {
        width: 100%;
        height: 400px;
        background-color: var(--primary);
    }
</style>