<script setup>
import { ref } from 'vue'
import SelectOrder from '@/components/education/select-order.vue'
import MyOrder from '@/components/education/my-order.vue'
import NewOrder from '@/components/education/new-order.vue'

const selectedOrderValue = ref(false)
</script>

<template>
  <div>
    <h1 class="text-4xl font-medium mt-10 text-center">Обучение</h1>
    <SelectOrder v-model:selected-order="selectedOrderValue" />
    <MyOrder v-if="selectedOrderValue" />
    <NewOrder v-else />
  </div>
</template>

<style scoped></style>
