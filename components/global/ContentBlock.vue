<script setup lang=ts></script>

<template>
    <div class="content-block">
        <img src="/svg/handshake.svg" alt="">
        <h4 data-bold>We are trusted</h4>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    </div>
</template>

<style scoped lang=scss>
    .content-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: var(--content-padding);
        border-radius: var(--border-radius);
        width: 250px;
        height: 150px;

        img {
            width: 25px;
        }
    }
</style>