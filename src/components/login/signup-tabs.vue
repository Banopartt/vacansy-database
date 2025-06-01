<script setup>
import { Button } from 'primevue'
import { ROLES } from '@/const/roles.js'

const selectedRole = defineModel('selectedRole')

const toggleRole = (role = ROLES.EMPLOYEE) => {
  selectedRole.value = role
}
</script>

<template>
  <div class="flex items-center w-full">
    <Button
      @click="toggleRole(ROLES.EMPLOYEE)"
      :class="[
        'w-full !rounded-r-none !border-middleGrey',
        selectedRole === ROLES.EMPLOYEE
          ? '!bg-lightGrey !text-customGray'
          : '!bg-white !text-middleGrey'
      ]"
    >
      Соискатель
    </Button>
    <Button
      @click="toggleRole(ROLES.COMPANY)"
      :class="[
        'w-full !rounded-l-none !border-middleGrey',
        selectedRole === ROLES.COMPANY
          ? '!bg-lightGrey !text-customGray'
          : '!bg-white !text-middleGrey'
      ]"
    >
      Компания
    </Button>
  </div>
</template>

<style scoped></style>
