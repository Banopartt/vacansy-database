<template>
    <div class="bg-white py-8 px-7 shadow-xs">
        <div class="font-rubik">
            <p class="text-customPink font-medium text-xl">
                {{ card.title }}
            </p>
            <span class="text-customBlack text-sm my-4 block">
                {{ card.price }} ₽ 
            </span>
            <p class="text-customGray text-sm max-w-full w-72 ">
                {{ card.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
const {card} = defineProps(['card'])
</script>

<style scoped>

</style>