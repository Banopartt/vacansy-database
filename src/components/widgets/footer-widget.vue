<template>
<footer class="mt-20">
    <div class="container mx-auto px-5">
        <p class="text-center text-customGray">
            © 2014-2021 homester.pro — сервис для подбора удаленных сотрудников
        </p>
       <div class="flex gap-4 sm:gap-7 items-center flex-col sm:flex-row justify-center my-8">
        <a class="text-customGray" :href="link.link" v-for="link in links" :key="'footer-link' + link.id">
            {{ link.name }}
        </a>
       </div>
    </div>
</footer>
</template>

<script setup>
const links = [
    {
        id:1,
        name: "Контактная информация",
        link: "/",
    },
    {
        id:2,
        name: "Политика конфидециальности",
        link: "/",
    },
    {
        id:3,
        name: "Пользовательское соглашение",
        link: "/",
    }
]
</script>

<style  scoped>

</style>