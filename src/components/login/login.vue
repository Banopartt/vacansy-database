<script setup>
import { InputText, Button } from 'primevue'
import SignupTabs from './signup-tabs.vue'
import { ref } from 'vue';
import { ROLES } from '@/const/roles';
import { http } from '@/api/http';
import { useRouter } from 'vue-router';


const selecteRole = ref(ROLES.EMPLOYEE)

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const createUsers = async () => {
  if(email.value === '' || password.value === ''){
    errorMessage.value = 'Заполните все поля'
    return
  }
  try{
    const res = await http.post('/register', {
      email: email.value,
      password: password.value,
      orders: [],
      vacancies: [],
      role: selecteRole.value
    })
    localStorage.setItem('my-token', res.data?.token)
    await router.push(`/user/${res.data?.data?.id}`)
  } catch(e){
    errorMessage.value = 'Введите корректные данные'
  }
}
</script>

<template>
  <form @submit.prevent="createUsers">
    <signup-tabs v-model:selecteRole="selecteRole"/>
    <div class="flex flex-col">
      <label for="username"> Email </label>
      <InputText type="email" v-model="email" id="username" class="!bg-lightGrey mt-3 !border-none !text-customBlack" />
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
    <p v-show="errorMessage" class="text-red-500 font-semibold">
      {{ errorMessage }}
    </p>
    <Button type="submit" variant="outlined" class="!border-customPink w-full mt-7 !text-customPink">
      Зарегистрироваться
    </Button>
    <Button variant="text" class="!text-customGray mt-7 w-full mx-auto" > У меня уже есть аккаунт</Button>
  </form>
</template>

<style scoped></style>