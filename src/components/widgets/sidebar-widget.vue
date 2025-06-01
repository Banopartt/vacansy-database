<template>
  <aside
    class="bg-gray-100 z-50 fixed h-0 left-0 right-0 opactiy-0 transition-all px-4 py-8 duration-700 overflow-x-hidden invisible"
    :class="{
      'opactiy-100 visible h-svh': isOpenSidebar,
    }"
  >
    <nav class="flex justify-between">
      <ul>
        <li
          v-for="(link, id) in navbarLinks"
          class="text-xl mb-7 font-rubik font-medium text-customBlack"
          :key="'sidebarLinks' + id"
        >
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
      <ul>
        <li
          v-for="(link, id) in navbarModals.filter((link) => link.name !== 'Войти')"
          class="text-xl mb-7 font-rubik font-normal text-[#FF4A96]"
          :key="'sidebarLinks' + id"
        >
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
    <hr class="text-[#C2CDCE] mt-7" />
    <div class="mt-7">
      <p
        v-for="(policyLink, id) in policyLinks"
        class="mb-7 font-rubik font-normal text-[#849A9C]"
        :key="'policyLinks-id-' + id"
      >
        {{ policyLink.name }}
      </p>
    </div>
    <div class="text-sm font-rubik font-normal text-[#849A9C] absolute bottom-24">
      2014-2021 homester.pro - <br />
      сервис для подбора удаленных сотрудников
    </div>
  </aside>
</template>

<script setup>
import { navbarLinks, navbarModals, policyLinks } from '@/const/links.js'
import { useSidebarStore } from '@/stores/sidebar.js'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const { isOpenSidebar } = storeToRefs(useSidebarStore())

watch(isOpenSidebar, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>

<style scoped></style>
