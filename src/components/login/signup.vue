<template>
     <form @submit.prevent="loginUsers" >
    <div class="flex flex-col">
      <label for="username"> Email </label>
      <InputText v-model="email" id="username" class="!bg-lightGrey mt-3 !border-none !text-customBlack" />
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
    <Button type="submit" variant="outlined" class="!border-customPink w-full mt-7 !text-customPink">
      Войти
    </Button>
    <Button variant="text" class="!text-customGray mt-7 w-full mx-auto" > У меня еще нет аккаунта</Button>
  </form>
</template>

<script setup>
import { http } from '@/api/http';
import { Button, InputText } from 'primevue';
import { ref } from 'vue';


const email = ref('')
const password = ref('')

const loginUsers = async () => {
  try{
    const res = await http.post('/auth', {
      email: email.value,
      password: password.value,
    })
    localStorage.setItem('my-token', res.data?.token)
  }catch(error) {
    console.log(error);
    
  }
}
</script>

<style  scoped>

</style>