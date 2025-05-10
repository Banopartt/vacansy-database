<script setup>
import { InputText, Button } from 'primevue'
import SignupTabs from './signup-tabs.vue';
</script>

<template>
  <form>
    <signup-tabs/>
    <div class="flex flex-col">
      <label for="username"> Email </label>
      <InputText id="username" class="!bg-lightGrey mt-3 !border-none !text-customBlack" />
    </div>
    <div class="flex flex-col mt-7">
      <label for="password"> Пароль </label>
      <InputText
        id="password"
        type="password"
        class="!bg-lightGrey mt-3 !border-none !text-customBlack"
      />
    </div>
    <Button variant="outlined" class="!border-customPink w-full mt-7 !text-customPink">
      Зарегистрироваться
    </Button>
    <Button variant="text" class="!text-customGray mt-7 w-full mx-auto" > У меня уже есть аккаунт</Button>
  </form>
</template>

<style scoped></style>