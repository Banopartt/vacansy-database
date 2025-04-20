<template>
    <div class="container mx-auto px-5" >
     <JobFilter/>
     <SearchVacansies :is-filter-btn="true" class="mt-10"/>
     <section>
     </section>
     <DepartmentSection/>
    </div>
</template>

<script setup>
import DepartmentSection from '@/components/department-section.vue';
import JobFilter from '@/components/job-filter.vue';
import SearchVacansies from '@/components/search-vacansies.vue';


</script>

<style  scoped>

</style>