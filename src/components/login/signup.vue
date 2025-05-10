<template>
     <form>
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
      Войти
    </Button>
    <Button variant="text" class="!text-customGray mt-7 w-full mx-auto" > У меня еще нет аккаунта</Button>
  </form>
</template>

<script setup>
import { Button, InputText } from 'primevue';


</script>

<style  scoped>

</style>