<script setup>
import { Button } from 'primevue'
import { useRoute, useRouter } from 'vue-router';

const selectedOrder = defineModel('selectedOrder', {
  default: {
    value: true,
    query: 'my-order',
  }
})
const router = useRouter()
const route = useRoute()
function updateOrder(order) {
  selectedOrder.value = order
  router.replace({query: {... route.query, order: order.query}})
}

</script>

<template>
  <div class="flex justify-center items-center mt-10">
    <Button
      @click="updateOrder({ value: true, query: 'my-order' })"
      :class="[
        'w-44 !text-customGray !rounded-r-none',
        selectedOrder.value ? '!border-2 !border-customGray !bg-lightGrey' : '!bg-white !border-none',
      ]"
    >
      Мои заказы
    </Button>
    <Button
      @click="updateOrder({ value: false, query: 'new-order' })"
      :class="[
        'w-44 !text-customGray !rounded-l-none',
        !selectedOrder.value ? '!border-2 !border-customGray !bg-lightGrey' : '!bg-white !border-none',
      ]"
    >
      Новый заказ
    </Button>
  </div>
</template>

<style scoped></style>