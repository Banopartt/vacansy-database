<script setup>
import { Button, InputText } from 'primevue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { http } from '@/api/http.js'
import { LOCALSTORAGE } from '@/const/localStorage.js'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const router = useRouter()

const loginUser = async () => {
  try {
    if (email.value === '' || password.value === '') {
      errorMessage.value = 'Заполните все поля'
      return
    }
    const res = await http.post('/auth', {
      email: email.value,
      password: password.value,
    })
    localStorage.setItem(LOCALSTORAGE.TOKEN, res.data?.token)
    await router.push(`/user/${res.data?.data?.id}`)
  } catch (error) {
    console.log(error)
    if (error.response.status === 401) {
      errorMessage.value = 'Пользователь не авторизован'
    }
  }
}
</script>

<template>
  <form @submit.prevent="loginUser">
    <div class="flex flex-col">
      <label for="username"> Email </label>
      <InputText
        v-model="email"
        id="username"
        class="!bg-lightGrey mt-3 !border-none !text-customBlack"
      />
    </div>
    <div class="flex flex-col mt-7">
      <label for="password"> Пароль </label>
      <InputText
        v-model="password"
        id="password"
        type="password"
        class="!bg-lightGrey mt-3 !border-none !text-customBlack"
      />
    </div>
    <p v-show="errorMessage" class="text-red-500 font-semibold my-2">{{ errorMessage }}</p>
    <Button
      type="submit"
      variant="outlined"
      class="!border-customPink w-full mt-7 !text-customPink"
    >
      Войти
    </Button>
    <Button variant="text" class="!text-customGray mt-7 w-full mx-auto">
      У меня еще нет аккаунта
    </Button>
  </form>
</template>

<style scoped></style>
