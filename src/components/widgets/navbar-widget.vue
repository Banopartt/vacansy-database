<template>
<header class="bg-white h-20 flex items-center">
    <div class="container mx-auto px-5 flex justify-between items-center text-customBlack">
        <nav>
            <ul class="flex gap-7 items-center ">
                <li v-for="(link, id) in navbarLinks" :key="'navbarLinks' + id">
                    <router-link :to="link.path"> {{ link.name }}</router-link>
                </li>
            </ul>
        </nav>
        <div>
            Homester.pro
        </div>
        <nav>
            <ul class="flex gap-7 items-center">
                <li v-for="(modal, id) in navbarModals" :key="'navbarModals' + id">
                    {{ modal.name }}
                </li>
            </ul>
        </nav>
    </div>
</header>
</template>

<script setup>
const navbarLinks = [
  {
    name: 'Вакансии',
    path: '/',
  },
  {
    name: 'Резюме',
    path: '/',
  },
  {
    name: 'Цены и услуги',
    path: '/',
  },
]

const navbarModals = [
  {
    name: 'Резюме',
  },
  {
    name: 'Вакансия',
  },
  {
    name: 'Войти',
  },
]
</script>

<style  scoped>

</style>