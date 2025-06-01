<script setup>
import { http } from '@/api/http';
import { LOCALSTORAGE } from '@/const/localStorage';
import { onMounted, ref } from 'vue';

const orders = ref([])

const getEducationOrders = async () => {
  try {
    const res = await http.get('/education', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE.TOKEN)}`
      }
    })
    orders.value = res.data
  }catch(err) {
    console.log(err);
    
  }
}
onMounted(() => {
  getEducationOrders()
})
</script>

<template>
  <div class="text-red-500">
    my order
  </div>
</template>

<style scoped>

</style>
