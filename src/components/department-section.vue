<template>
  <section class="bg-white">
    <div class="container mx-auto px-5 pt-20">
      <h2 class="text-center text-customBlack font-rubik text-2xl">
        Помогаем строить удаленные отделы
      </h2>
      <div class="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <RemoteDepartments
          v-for="card in mockDepartments"
          :key="'mockDepartments' + card.id"
          :card="card"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { mockDepartments } from '@/const/mock-departments.js'
import RemoteDepartments from './remote-departments.vue'
</script>

<style scoped></style>
