<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Avatar } from 'primevue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.js'

const router = useRouter()

const { user } = storeToRefs(useUserStore())
const { getters } = useUserStore()
const isOpenAvatar = ref(false)

const menuRef = ref(null)
const avatarTrigger = ref(null)

const handleClickOutside = (event) => {
  if (!menuRef.value?.contains(event.target) && !avatarTrigger.value?.contains(event.target)) {
    isOpenAvatar.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const links = [
  {
    title: 'Мои вакансии',
    to: '',
    role: getters.isCompanyRole,
  },
  {
    title: 'Поиск по резюме',
    to: '',
    role: getters.isCompanyRole,
  },
  {
    title: 'Платные услуги',
    to: '',
    role: getters.isCompanyRole,
  },
  {
    title: 'Мое резюме',
    to: '',
    role: getters.isEmployeeRole,
  },
  {
    title: 'Мои собеседования',
    to: '',
    role: getters.isEmployeeRole,
  },
  {
    title: 'Вакансии',
    to: '',
    role: getters.isEmployeeRole,
  },
  {
    title: 'Обучение',
    to: '/user/employee/education',
    role: getters.isEmployeeRole,
  },
]

const avatarLinks = [
  {
    title: 'Мои компании',
    to: '',
    role: getters.isCompanyRole,
  },
  {
    title: 'Мои заказы',
    to: '',
    role: getters.isCompanyRole || getters.isEmployeeRole,
  },
  {
    title: 'Профиль',
    to: '',
    role: getters.isCompanyRole || getters.isEmployeeRole,
  },
  {
    title: 'Выйти',
    to: '',
    role: getters.isCompanyRole || getters.isEmployeeRole,
  },
]
</script>

<template>
  <header class="bg-white h-20 flex items-center">
    <div class="container mx-auto flex justify-between items-center px-5">
      <div class="flex gap-7 items-center">
        <div class="cursor-pointer text-customBlack font-rubik text-xl font-medium">
          Homester.pro
        </div>
        <nav class="text-customBlack font-normal text-sm">
          <ul class="flex items-center gap-7">
            <li v-for="(link, id) in links" :key="'user-link-id' + id">
              <router-link :to="link.to" v-if="link.role">
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="flex gap-2 items-center relative cursor-pointer"
        ref="avatarTrigger"
        @click="isOpenAvatar = !isOpenAvatar"
      >
        <p class="text-customBlack font-normal text-sm">
          {{ user.email }}
        </p>
        <Avatar
          icon="pi pi-user"
          style="background-color: #ece9fc; color: #2a1261"
          shape="circle"
          size="large"
        />
        <i
          class="pi pi-caret-down text-base text-customBlack"
          :class="{
            'rotate-180': isOpenAvatar,
          }"
        ></i>
        <div
          ref="menuRef"
          @click.stop
          v-show="isOpenAvatar"
          class="absolute w-32 min-h-32 -bottom-[140px] right-0 bg-white shadow-lg flex flex-col gap-4 px-3 py-1.5"
        >
          <router-link
            v-for="(link, id) in avatarLinks"
            class="text-customBlack font-rubik"
            :key="'avatar-link-id' + id"
            :to="link.to"
          >
            <span v-if="link.role">
              {{ link.title }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
