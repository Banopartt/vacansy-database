<template>
  <div class="container mx-auto px-5">
    <JobFilter />
    <SearchVacansies @search-resumes="searchVacancies" v-model:search-value="searchValue" :is-filter-btn="true" class="mt-10" />
    <section class="min-h-52">
      <div v-if="isLoading" class="flex justify-center items-center my-4">
        <ProgressSpinner />
      </div>
      <div v-if="vacancies.length" class="grid grid-cols-2 mt-10 gap-6">
        <VacancyCard
          v-for="vacancy in vacancies"
          :key="'vacancy-id' + vacancy.id"
          :vacancy="vacancy"
        />
      </div>
      <Message v-if="errorMessage" class="mt-10" severity="error">{{ errorMessage }}</Message>
    </section>
    <DepartmentSection class="mt-20" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { ProgressSpinner, Message } from 'primevue'
import DepartmentSection from '@/components/department-section.vue'
import JobFilter from '@/components/job-filter.vue'
import SearchVacansies from '@/components/search-vacansies.vue'
import VacancyCard from '@/components/vacancy-card.vue'
import { http } from '@/api/http.js'

const isLoading = ref(false)
const vacancies = ref([])
const errorMessage = ref('')
const searchValue = ref('')
async function fetchVacancies() {
  isLoading.value = true
  try {
    const res = await http.get('/vacancies')
    vacancies.value = res.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Damn bro, произошла ошибка. Попробуйте позже'
  } finally {
    isLoading.value = false
  }
}
async function searchVacancies() {
  isLoading.value = true
  try {
    const res = await http.get('/vacancies?title=*' + searchValue.value)
    vacancies.value = res.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Damn bro, произошла ошибка. Попробуйте позже'
  } finally {
    isLoading.value = false
  }
}



onMounted(() => {
  fetchVacancies()
})
</script>

<style scoped></style>
