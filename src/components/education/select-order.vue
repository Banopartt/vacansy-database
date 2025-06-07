<script setup>
import { Button } from 'primevue'

const selectedOrder = defineModel('selectedOrder', {
  default: true,
})
</script>

<template>
  <div class="flex justify-center items-center mt-10">
    <Button
      @click="selectedOrder = true"
      :class="[
        'w-44 !text-customGray !rounded-r-none',
        selectedOrder ? '!border-2 !border-customGray !bg-lightGrey' : '!bg-white !border-none',
      ]"
    >
      Мои заказы
    </Button>
    <Button
      @click="selectedOrder = false"
      :class="[
  'w-44 !text-customGray !rounded-l-none',
  !selectedOrder ? '!border-2 !border-customGray !bg-lightGrey' : '!bg-white !border-none',
]"
    >
      Новый заказ
    </Button>
  </div>
</template>

<style scoped></style>