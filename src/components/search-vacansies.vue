<template>
    <div class="container mx-auto px-5">
        <div class="bg-white p-4 flex items-center flex-col sm:flex-row gap-1">
            <div class="relative w-full">
                <i v-show="isVisibleSearchIcon" class="pi pi-search absolute ml-3 mt-1 !text-2xl text-gray-500 "></i>
                <InputText v-model="searchValue" placeholder="Поиск по вакансиям" class=" w-full sm:w-11/12 !bg-lightGrey !pl-12 !border-none !text-customGray " />
            </div>
            <Button class="!hidden sm:!block w-52 !text-customPink !border-customPink !bg-transparent 2xl:w-36 ">Все вакансии</Button>
            <Button class="w-full sm:w-52 mt-4 sm:mt-0 !text-black !border-black !bg-transparent 2xl:w-36">Все резюме</Button>
        </div>
    </div>
</template>

<script setup>
import { InputText, Button } from 'primevue';
import { ref, watch } from 'vue';


const searchValue = ref('')

const isVisibleSearchIcon = ref(true)

watch(searchValue, ()=>{
    if (searchValue.value.length) {
        isVisibleSearchIcon.value = false
    }
    if (searchValue.value.length === 0) {
        isVisibleSearchIcon.value = true
    }
})

</script>

<style scoped></style>