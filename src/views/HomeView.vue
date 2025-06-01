<script setup>
import { onMounted, ref } from 'vue'
import BannerInfo from '@/components/banner-info.vue'
import SearchVacansies from '@/components/search-vacansies.vue'
import CategoryCard from '@/components/widgets/category-card.vue'
import DepartmentSection from '@/components/department-section.vue'
import { http } from '@/api/http.js'

const categories = ref([])

async function fetchCategory() {
  try {
    const response = await http.get('/category')
    categories.value = response.data
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  fetchCategory()
})
</script>

<template>
  <div>
    <BannerInfo />
    <SearchVacansies />
    <section class="mt-10">
      <div class="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CategoryCard
          v-for="category in categories"
          :key="'mockCategory' + category.id"
          :category="category"
        />
      </div>
      <p class="container mx-auto px-5 my-20 text-center font-light font-rubik text-customGray">
        Категория, Еще категория, Категория, Категория, Категория, Еще категория, Категория,
        Категория, <br />
        Еще категория, Категория, Категория, Еще категория, Категория, Категория, Еще категория,
        Категория, Категория,
        <br />
        Категория, Еще категория, Категория, Категория, Категория, Еще категория, Категория,
        Категория,
      </p>
    </section>
    <DepartmentSection />
  </div>
</template>
