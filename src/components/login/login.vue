<script setup>
import { ref } from 'vue'
import { InputText, Button } from 'primevue'
import { useRouter } from 'vue-router'
import SignupTabs from '@/components/login/signup-tabs.vue'
import { ROLES } from '@/const/roles.js'
import { LOCALSTORAGE } from '@/const/localStorage.js'
import { http } from '@/api/http.js'

const selectedRole = ref(ROLES.EMPLOYEE)
const isOpenResumeModal = defineModel('isOpenResumeModal')
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const router = useRouter()

const createUser = async () => {
  if (email.value === '' || password.value === '') {
    errorMessage.value = 'Заполните все поля'
    return
  }
  try {
    const res = await http.post('/register', {
      email: email.value,
      password: password.value,
      orders: [],
      vacancies: [],
      role: selectedRole.value,
    })
    localStorage.setItem(LOCALSTORAGE.TOKEN, res.data?.token)
    await router.push(`/user/${res.data?.data?.id}`)
    isOpenResumeModal.value = false
  } catch (e) {
    errorMessage.value = 'Введите корректные данные'
    console.log(e)
  }
}
</script>

<template>
  <form @submit.prevent="createUser">
    <signup-tabs v-model:selectedRole="selectedRole" />
    <div class="flex flex-col mt-7">
      <label for="username"> Email </label>
      <InputText
        type="email"
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
    <p v-show="errorMessage" class="text-red-500 font-semibold my-3">
      {{ errorMessage }}
    </p>
    <Button
      type="submit"
      variant="outlined"
      class="!border-customPink w-full mt-7 !text-customPink"
    >
      Зарегистрироваться
    </Button>
    <Button variant="text" class="!text-customGray mt-7 w-full mx-auto">
      У меня уже есть аккаунт
    </Button>
  </form>
</template>

<style scoped></style>
