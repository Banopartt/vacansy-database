<script setup>
import BannerInfo from '@/components/banner-info.vue';
import SearchVacansies from '@/components/search-vacansies.vue';
import CategoryCard from '@/components/widgets/category-card.vue';
import { mockCategory } from '@/const/mock-category';
import remoteDepartments from '@/components/remote-departments.vue';
import { mockDepartments } from '@/const/mock-departments';


</script>

<template>
  <div>
   <BannerInfo/>
   <SearchVacansies/>
   <section class="mt-10">
    <div class="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <CategoryCard v-for="category in mockCategory" :key="'mockCategory' + category.id" :category="category"/>
    </div>
    <p class="container mx-auto px-5 my-20 text-center font-light font-rubik text-customGray">
      Категория, Еще категория, Категория, Категория, Категория, Еще категория, Категория, Категория, <br> 
Еще категория, Категория, Категория, Еще категория, Категория, Категория, Еще категория, Категория, Категория, 
<br>
Категория, Еще категория, Категория, Категория, Категория, Еще категория, Категория, Категория, 
    </p>
   </section>
   <section class="bg-white">
  <div class="container mx-auto px-5 pt-20 ">
    <h2 class="text-center text-customBlack font-rubik text-2xl">
      Помогаем строить удаленные отделы
    </h2>
   <div class="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <remote-departments v-for="card in mockDepartments" :key="'mockDepartments' + card.id" :card="card" />
   </div>
  </div> 
  </section>
  </div>
</template>
