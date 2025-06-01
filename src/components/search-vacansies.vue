<template>
  <div class="container mx-auto px-5">
    <div class="bg-white p-4 flex items-center flex-col sm:flex-row gap-1">
      <div class="relative w-full">
        <i
          v-show="isVisibleSearchIcon"
          class="pi pi-search absolute ml-3 mt-1 !text-2xl text-gray-500"
        ></i>
        <InputText
          v-model="searchValue"
          placeholder="Поиск по вакансиям"
          class="w-full sm:w-11/12 !bg-lightGrey !pl-12 !border-none !text-customGray"
        />
      </div>
      <Button
        v-if="isFilterBtn"
        @click="visible = true"
        class="!bg-transparent border font-rubik !text-customGray !border-customGray w-full mt-4 sm:mt-0 sm:w-1/3"
      >
        <div class="flex flex-col gap-0.5">
          <span
            v-for="line in 3"
            class="block bg-customGray rounded-xl h-0.5 w-4"
            :key="'btn-line-' + line"
            :class="{
              '!w-3 mx-auto': line === 2,
              '!w-2 mx-auto': line === 3,
            }"
          ></span>
        </div>
        Фильтр (5)
      </Button>
      <template>
        <Button
          class="!hidden sm:!block w-52 !text-customPink !border-customPink !bg-transparent 2xl:w-36"
        >
          Все вакансии
        </Button>
        <Button
          class="w-full sm:w-52 mt-4 sm:mt-0 !text-black !border-black !bg-transparent 2xl:w-36"
          >Все резюме
        </Button>
      </template>
    </div>
    <Dialog
      class="!bg-white !text-customBlack"
      v-model:visible="visible"
      modal
      :style="{ width: '60rem' }"
    >
      <template #header>
        <p class="text-3xl font-medium font-rubik">Фильтровать {{ type }}</p>
      </template>
      <div v-if="isOptionsLoading" class="flex justify-center items-center my-4">
        <ProgressSpinner />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" v-else>
        <div>
          <p class="font-bold mb-2">Категория</p>
          <div v-for="cat in category" :key="'cat-id' + cat.id" class="mb-1">
            <Checkbox
              class="mr-2"
              :inputId="'cat-' + cat.id"
              :value="cat.id"
              v-model="filter.categories"
            />
            <label :for="'cat-' + cat.id">{{ cat.title }}</label>
          </div>
        </div>
        <div>
          <p class="font-bold mb-2">Компенсация</p>
          <div v-for="comp in compensation" :key="'comp-id' + comp.id" class="mb-1">
            <Checkbox
              class="mr-2"
              :inputId="'comp-' + comp.id"
              :value="comp.id"
              v-model="filter.compensations"
            />
            <label :for="'comp-' + comp.id">{{ comp.range }}</label>
          </div>
        </div>
        <div>
          <p class="font-bold mb-2">Уровень</p>
          <div v-for="lvl in level" :key="'lvl-id' + lvl.id" class="mb-1">
            <Checkbox
              class="mr-2"
              :inputId="'lvl-' + lvl.id"
              :value="lvl.id"
              v-model="filter.levels"
            />
            <label :for="'lvl-' + lvl.id">{{ lvl.title }}</label>
          </div>
        </div>
        <div>
          <p class="font-bold mb-2">Локация</p>
          <div v-for="loc in location" :key="'loc-id' + loc.id" class="mb-1">
            <Checkbox
              class="mr-2"
              :inputId="'loc-' + loc.id"
              :value="loc.id"
              v-model="filter.locations"
            />
            <label :for="'loc-' + loc.id">{{ loc.title }}</label>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-10">
        <Button variant="outlined" severity="danger" class="w-72 h-12">Применить</Button>
        <Button @click="clearFilters" variant="outlined" severity="secondary" class="w-72 h-12">Очистить все</Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { InputText, Button, Dialog, Checkbox, ProgressSpinner } from 'primevue'
import { ref, watch } from 'vue'
import { debounce } from '@/lib/debounce.js'
import { useFilterOptions } from '@/composables/useFilterOptions.js'

const {
  fetchCategories,
  filter,
  category,
  location,
  compensation,
  level,
  isOptionsLoading,
  clearFilters,
} = useFilterOptions()

const emit = defineEmits(['searchResumes'])
const searchValue = defineModel('searchValue')
const { isFilterBtn, type = 'резюме' } = defineProps(['isFilterBtn', 'type'])
const visible = ref(false)
const isVisibleSearchIcon = ref(true)

const debouncedEmit = debounce(() => {
  emit('searchResumes')
}, 500)

watch(searchValue, () => {
  debouncedEmit()
  isVisibleSearchIcon.value = searchValue.value.length === 0
})

watch(visible, (newValue) => {
  if (newValue) {
    fetchCategories()
  }
})
</script>

<style scoped></style>
