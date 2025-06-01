<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 place-items-center xl:place-items-stretch mt-10 gap-3">
        <div class="text-customBlack bg-white px-7 py-5 text-sm text-center w-44 h-20 " v-for="filter in filters" :key="'filter-' + filter.name">
            {{ filter.title }}  
        </div>
    </div>
</template>

<script setup>
const filters = [
  {
    title: "Все вакансии",
    name: "all",
  },
  {
    title: "Оператор call-центра",
    name: "call-center"
  },
  {
    title: "Оператор поддержки",
    name: "support"
  },
  {
    title: "Персональный ассистент",
    name: "personal-assistent"
  },
  {
    title: "Контент-менеджер",
    name: "content-manager"
  },
  {
    title: "Системный администратор",
    name: "system-administration"
  }
]
</script>

<style  scoped>

</style>