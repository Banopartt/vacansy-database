<template>
<aside class="bg-gray-100 z-50 sticky h-0 opactiy-0 transition-all px-4 py-8 duration-700 overflow-x-hidden invisible"
:class="{
'opactiy-100 visible h-svh': isOpenSidebar
}"
>
<nav>
    <ul>
        <li v-for="(link, id) in navbarLinks" class="text-xl font-rubik font-medium text-customBlack" :key="'sidebarLinks' + id">
            <router-link :to="link.path">{{ link.name }}</router-link>

        </li>
    </ul>
    <ul>
        <li v-for="(link, id) in navbarModals.filter((link) => link.name !== 'Войти')" class="text-xl font-rubik font-medium text-customBlack" :key="'sidebarLinks' + id">
            <router-link :to="link.path">{{ link.name }}</router-link>

        </li>
    </ul>
</nav>
<hr class="text-[#C2CDCE]">
</aside>
</template>

<script setup>
import { navbarLinks, navbarModals } from '@/const/links';
import { useSidebarStore } from '@/stores/sidebar';
import { storeToRefs } from 'pinia';

const {isOpenSidebar} = storeToRefs(useSidebarStore())
</script>

<style scoped>

</style>