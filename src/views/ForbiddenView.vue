<template>
    <div class="text-customBlack mt-20 flex flex-col items-center justify-center"> 
        <h1 class="text-center text-4xl font-bold">403 Forbidden</h1> 
        <p class="text-center mt-3 text-xl">You do not have permission to access this page.</p>
        <Button @click="router.push('/')" class="w-52 mt-4 !bg-customPink !border-none !text-white">Go Home</Button>
    </div>
</template>

<script setup>
import { Button } from 'primevue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>

</style>