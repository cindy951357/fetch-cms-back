<template>
    <div class="order-detail content-page">
        訂單詳情 {{ $route.params.orderId }}


        
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const orderId = route.params.orderId;

</script>

<style lang="scss" scoped>

</style>