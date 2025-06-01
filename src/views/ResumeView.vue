<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Message, ProgressSpinner, Button } from 'primevue'
import SearchVacansies from '@/components/search-vacansies.vue'
import ResumeCard from '@/components/resume-card.vue'
import { http } from '@/api/http.js'

const resumes = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

const searchValue = ref('')

const fetchResumes = async () => {
  isLoading.value = true
  try {
    const res = await http.get('/resumes')
    resumes.value = res.data
    isLoading.value = false
  } catch (err) {
    console.log(err)
    errorMessage.value = 'Произошла ошибка с резюме'
  } finally {
    isLoading.value = false
  }
}


const searchResumes = async () => {
  isLoading.value = true
  try {
    const res = await http.get('/resumes?name=*' + searchValue.value)
    resumes.value = res.data
    isLoading.value = false
  } catch (err) {
    console.log(err)
    errorMessage.value = 'Произошла ошибка с резюме'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchResumes()
})
onUnmounted(() => {
  resumes.value = []
})
</script>

<template>
  <div>
    <SearchVacansies @searchResumes="searchResumes" v-model:search-value="searchValue" :is-filter-btn="true" class="mt-10" />
    <div v-if="isLoading" class="flex justify-center items-center my-4">
      <ProgressSpinner />
    </div>
    <section
      v-if="!isLoading && !errorMessage.length"
      class="container grid grid-cols-2 gap-6 mx-auto px-5 mt-11"
    >
      <ResumeCard v-for="(resume, id) in resumes" :resume="resume" :key="'resumes-id-' + id" />
    </section>
    <Message v-if="errorMessage" class="mt-10 container mx-auto px-5" severity="error">
      {{ errorMessage }}
    </Message>
    <p
      class="mt-10 flex justify-center items-center font-semibold text-3xl text-customBlack"
      v-if="!errorMessage && !resumes.length && !isLoading"
    >
      На данный момент резюме нет
    </p>
    <Button v-if="resumes.length" class="w-full mt-11" severity="secondary"> Eще 20 резюме </Button>
  </div>
</template>

<style scoped></style>
