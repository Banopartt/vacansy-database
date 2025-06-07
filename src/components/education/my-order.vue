<script setup>
import { onMounted, ref } from 'vue';
import orderCard from './order-card.vue';
import { http } from '@/api/http';
import { LOCALSTORAGE } from '@/const/localStorage';

const orders = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const getEducationOrders = async () => {
  try {
    isLoading.value = true
    const res = await http.get('/education', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE.TOKEN)}`
      }
    })
    orders.value = res.data
  }catch(err) {
    console.log(err);
    errorMessage.value = 'Ошибка загрузки заказов'
  }finally {
    isLoading.value = false
  }
}
onMounted(() => {
  getEducationOrders()
})
</script>

<template>
  <div class="container mx-auto px-5">
   <div v-if="isLoading" class="flex justify-center items-center mt-5">
      <ProgressSpinner/>
    </div>
  
    <div v-else-if="!isLoading && !errorMessage">
    <order-card v-for="(order,id) in orders" :key="'order-id-' + id" :order="order" />
    </div>
  
    <Message  v-else class="mt-10 container mx-auto px-5" severity="error">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<style scoped>

</style>
