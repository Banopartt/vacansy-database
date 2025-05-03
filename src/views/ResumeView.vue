<template>
    <div>
        <SearchVacansies :is-filter-btn="true" class="mt-10" />

    </div>
</template>

<script setup>
import SearchVacansies from '@/components/search-vacansies.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import {http} from '@/api/http.js';


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