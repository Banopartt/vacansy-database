<script setup>
import { http } from '@/api/http';
import { LOCALSTORAGE } from '@/const/localStorage';
import { Button, Checkbox } from 'primevue';
import { ref } from 'vue';

const orderData = ref({
  price: 0,
  comment: '',
})

const submitOrder = async () => {
  try{
    const response = await http.post('/education', {
      price: orderData.value.price,
      comment: orderData.value.comment
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE.TOKEN)}`
      }
    });
  } catch(e) {}
}

</script>

<template>
  <div class="container mx-auto px-5">
    <div class="text-customBlack mt-10 w-9/12 bg-white shadow-lg rounded py-7 px-10 mx-auto">
      <div class="flex items-center gap-2">
        <Checkbox/>
        <label for="" >Обучающий курс <br>
        <span class="font-bold">490 руб.</span>
        </label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox/>
        <label for="" >Шаблоны документов «Удаленка» <br>
        <span class="font-bold">490 руб.</span>
        </label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox/>
        <label for="" >Тренинг «Убойная удаленка» <br>
        <span class="font-bold">490 руб.</span>
        </label>
        </div>
        <label for="">Комментарий</label>
        <textarea placeholder="Основана в 2010 году." class="w-full h-40 bg-lightGrey mt-3">
        </textarea>
        <Button @click.prevent="submitOrder" class="w-full mt-6 !text-customPink !border-customPink !bg-transparent">Оплатить 490 руб.</Button>
    </div>
  </div>
</template>

<style scoped>

</style>
