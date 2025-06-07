<template>
    <div class="w-full h-36 p-7 bg-white shadow-lg mt-5">
        <p class="text-customBlack text-xl font-medium">
            {{ order?.name }}
        </p>
       <p class="text-customGray my-4 font-normal text-sm">
        {{ order?.date }}
       </p>
       <span class="text-customPink font-normal text-sm">{{ order?.price }}</span>
    </div>
</template>

<script setup>
const {order} = defineProps(['order'])
</script>

<style scoped>

</style>