<template>
    <div>
        <SearchVacansies :is-filter-btn="true" class="mt-10" />
        <div v-if="isLoading" class="flex justify-center items-center my-4">
            <ProgressSpinner/>
        </div>
        <section
        v-if="!isLoading && !errorMessage.length"
        class="container mx-auto px-5 grid grid-cols-2 gap-6 mt-11">
            <ResumeCard v-for="(resume,id) in resumes" :resume="resume" :key="'resume-id-' + id"/>
        </section>
        <Message v-if="errorMessage" class="mt-10 container mx-auto px-5" severity="error">{{ errorMessage }}</Message>
        <p class="mt-10 flex justify-center items-center font-semibold text-3xl text-customBlack"
        v-if="!errorMessage && !resumes.length && !isLoading"
        >
        На данный момент резюме нет    
        </p>
        <Button class="container mx-auto px-5 w-full mt-20 !bg-white" severity="secondary">
            Eще 20 резюме
        </Button>
    </div>
</template>

<script setup>
import SearchVacansies from '@/components/search-vacansies.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import {http} from '@/api/http.js';
import ResumeCard from '@/components/resume-card.vue';
import { Message, ProgressSpinner, Button } from 'primevue';

const resumes = ref([]) 
const isLoading = ref(false)
const errorMessage = ref("")

async function fetchResumes() {
    isLoading.value = true
    try{
        const response = await http.get('/resumes')
        resumes.value = response.data
        isLoading.value = false 
    } catch(e) {
        console.log(e)
        errorMessage.value = "Произошла ошибка с резюме"
    } finally {
        isLoading.value = false
    }
}

onMounted ( ()=> {
    fetchResumes()

} )
onUnmounted(()=>{
    resumes.value = []
})
</script>

<style scoped>

</style>