<script setup>
import { computed, ref } from 'vue'
import { Checkbox, Button, useToast } from 'primevue'
import { http } from '@/api/http.js'
import { LOCALSTORAGE } from '@/const/localStorage.js'

const toast = useToast()
const items = ref([
  { name: 'Обучающий курс', price: 490, checked: false },
  { name: 'Шаблоны документов «Удаленка»', price: 490, checked: false },
  { name: 'Тренинг «Убойная удаленка»', price: 490, checked: false },
])

const comment = ref('')

const totalPrice = computed(() => {
  return items.value.reduce((sum, item) => {
    return item.checked ? sum + item.price : sum
  }, 0)
})

const submitOrder = async () => {
  try {
    const selectedItems = items.value.filter((item) => item.checked)

    if (selectedItems.length === 0) return

    await http.post(
      '/education',
      {
        price: totalPrice.value,
        comment: comment.value,
        items: selectedItems.map((i) => i.name),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE.TOKEN)}`,
        },
      },
    )
    items.value.forEach((item) => (item.checked = false))
    comment.value = ''
    toast.add({
      severity: 'success',
      summary: 'Успешно',
      detail: 'Заказ успешно создан !',
      life: 5000,
    })
  } catch (e) {
    console.error(e)
    toast.add({
      severity: 'error',
      summary: 'Ошибка !',
      detail: 'Произошла ошибка, попробуйте повторить еще раз',
      life: 5000,
    })
  }
}
</script>

<template>
  <div class="container mx-auto px-5">
    <div class="text-customBlack mt-10 w-9/12 bg-white shadow-lg rounded py-7 px-10 mx-auto">
      <div v-for="(item, idx) in items" :key="idx" class="flex items-center gap-2 mb-3">
        <Checkbox v-model="item.checked" :inputId="`item-${idx}`" :binary="true" />
        <label :for="`item-${idx}`">
          {{ item.name }} <br />
          <span class="font-bold">{{ item.price }} руб.</span>
        </label>
      </div>
      <label for="" class="mt-6 block"> Комментарий </label>
      <textarea
        v-model="comment"
        placeholder="Основана в 2010 году."
        class="w-full p-2 h-40 bg-lightGrey mt-3"
      >
      </textarea>
      <Button
        @click.prevent="submitOrder"
        class="w-full mt-6 !text-customPink !border-customPink !bg-transparent"
      >
        Оплатить {{ totalPrice }} руб.
      </Button>
    </div>
  </div>
</template>

<style scoped></style>