<template>
  <header class="bg-white h-20 flex items-center">
    <div class="container mx-auto px-5 flex justify-between items-center text-customBlack">
      <BurgerMenu class="block md:hidden" @click="actions.handleopenSidebar" />
      <nav class="hidden md:block">
        <ul class="flex gap-7 items-center">
          <li v-for="(link, id) in navbarLinks" :key="'navbarLinks' + id">
            <router-link :to="link.path"> {{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="cursor-pointer" @click="router.push('/')">Homester.pro</div>
      <nav class="hidden md:block">
        <ul class="flex gap-7 items-center">
          <li
            v-for="(modal, id) in navbarModals"
            :key="'navbarModals' + id"
            @click="openModal(modal.name)"
            :class="{
              'bg-[#F8F8F8] !text-[#133F42] py-1 px-2 rounded': modal.name == 'Войти',
            }"
            class="text-[#FF4A96] font-light cursor-pointer font-rubik flex gap-1.5"
          >
            <div
              v-if="modal.name !== 'Войти'"
              class="rounded-full border-2 w-6 h-6 flex justify-center items-center text-lg font-semibold"
            >
              +
            </div>
            {{ modal.name }}
          </li>
        </ul>
      </nav>
      <i class="pi pi-user !text-xl !block md:!hidden"></i>
    </div>
    <Dialog
      :style="{
        width: '31.25rem',
      }"
      header="Регистрация"
      class="!bg-white !text-customBlack"
      v-model:visible="isOpenResumeModal"
      modal
    >
      <Login v-model:isOpenResumeModal="isOpenResumeModal" />
    </Dialog>
    <Dialog
      :style="{
        width: '31.25rem',
      }"
      header="Регистрация"
      class="!bg-white !text-customBlack"
      v-model:visible="isOpenVacanciesModal"
      modal
    >
      <Login v-model:isOpenResumeModal="isOpenResumeModal" />
    </Dialog>
    <Dialog
      :style="{
      width: '31.25rem',
      }"
      header="Вход в кабинет"
      class="!bg-white !text-customBlack"
      v-model:visible="isOpenLoginModal"
      modal
    >
      <Signup />
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog } from 'primevue'
import { useRouter } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar.js'
import { navbarLinks, navbarModals } from '@/const/links.js'
import BurgerMenu from '../burger-menu.vue'
import Login from '@/components/login/login.vue'
import Signup from '@/components/login/signup.vue'

const { actions } = useSidebarStore()
const router = useRouter()

const isOpenResumeModal = ref(false)
const isOpenVacanciesModal = ref(false)
const isOpenLoginModal = ref(false)

const openModal = (name) => {
  if (name === 'Резюме') isOpenResumeModal.value = true
  else if (name === 'Вакансия') isOpenVacanciesModal.value = true
  else if (name === 'Войти') isOpenLoginModal.value = true
}
</script>

<style scoped></style>
