<template>
  <div class="p-7 bg-white rounded text-customBlack font-rubik">
    <p class="text-xl font-medium">
      {{ vacancy?.title || 'Название не указано' }}
    </p>
    <span class="mt-4 text-customPink font-normal">150 000 ₽ - 300 000 ₽</span>
    <p class="font-light mt-4">
      {{ vacancy?.description || 'Описание не уакзано' }}
    </p>
    <div class="mt-14 font-normal flex gap-4">
      <p>{{ vacancy?.country }}</p>
      <p>{{ vacancy?.nameCompany }}</p>
      <p>{{ vacancy?.grade?.[0] || '-' }}</p>
    </div>
  </div>
</template>

<script setup>
const { vacancy } = defineProps(['vacancy'])
</script>

<style scoped></style>
