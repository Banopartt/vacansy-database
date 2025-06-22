<template>
  <div class="container mx-auto px-5">
    <JobFilter />

    <SearchVacansies
      @search-resumes="fetchVacancies"
      v-model:search-value="searchValue"
      :is-filter-btn="true"
      @fetchFilterResumes="fetchVacancies"
      class="mt-10"
    />

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
import { useUserStore } from '@/stores/user.js'
import { useFilterOptions } from '@/composables/useFilterOptions.js'

const isLoading = ref(false)
const vacancies = ref([])
const errorMessage = ref('')
const searchValue = ref('')

const { actions: userActions } = useUserStore()
const { filter } = useFilterOptions()

async function fetchVacancies() {
  isLoading.value = true
  try {
    const params = new URLSearchParams()

    // Строка поиска
    if (searchValue.value.trim()) {
      params.append('title', '*' + searchValue.value.trim())
    }

    // Фильтры
    filter.value.categories.forEach(id => params.append('categories[]', id))
    filter.value.compensations.forEach(id => params.append('compensations[]', id))
    filter.value.levels.forEach(id => params.append('levels[]', id))
    filter.value.locations.forEach(id => params.append('locations[]', id))

    const res = await http.get('/vacancies?' + params.toString())
    vacancies.value = res.data
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Damn bro, произошла ошибка. Попробуйте позже'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchVacancies()
  userActions.init()
})
</script>

<style scoped></style>