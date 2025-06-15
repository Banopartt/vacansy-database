<script setup>
import { onMounted, ref } from 'vue'
import SelectOrder from '@/components/education/select-order.vue'
import MyOrder from '@/components/education/my-order.vue'
import NewOrder from '@/components/education/new-order.vue'
import { useRoute } from 'vue-router'


const route = useRoute()

const selectedOrderValue = ref({
  value: true,
  query: 'my-order',
})

onMounted(()=> {
  const queryParam = route.query.order
  if (queryParam === 'new-order') {
    selectedOrderValue.value = {
      value: false,
      query: 'new-order',
    }
  }
})
</script>

<template>
  <div>
    <h1 class="text-4xl font-medium mt-10 text-center">Обучение</h1>
    <SelectOrder v-model:selected-order="selectedOrderValue" />
    <MyOrder v-if="selectedOrderValue.value" />
    <NewOrder v-else />
  </div>
</template>

<style scoped></style>
