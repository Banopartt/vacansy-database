<template>
    <div>
        <header class="bg-white h-20 flex items-center">
            <div class="container mx-auto px-5">
                <div class="cursor-pointer " @click="router.push('/')">Homester.pro</div>
            </div>
        </header>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<style  scoped>

</style>