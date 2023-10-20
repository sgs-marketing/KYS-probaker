<script setup lang="ts">

</script>

<template>
<div class="locale" data-border-contrast data-border-radius>
    <img src="/flags/4x3/no.svg" alt="">
    <p data-contrast>Norway / NOK</p>
</div>
</template>

<style scoped lang="scss">
.locale {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: var(--box-height);
    padding: var(--box-padding);

    > img {
        height: 1.125rem;
    }
}
</style>