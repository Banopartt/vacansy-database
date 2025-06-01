<script setup>
import { Button } from 'primevue'

const selectedOrder = defineModel('selectedOrder', {
  default: true,
})
</script>

<template>
  <div class="flex justify-center items-center">
    <Button @click="selectedOrder = !selectedOrder"> Мои заказы</Button>
    <Button @click="selectedOrder = !selectedOrder"> Новый заказ</Button>
  </div>
</template>

<style scoped></style>
