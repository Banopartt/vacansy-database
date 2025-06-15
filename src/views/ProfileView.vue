<script setup>
import { onMounted, ref, watch } from 'vue'
import { Avatar, Dialog,  } from 'primevue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import KeysIcon from '@/assets/images/keys.png'
import ProfileBasicform from '@/components/profile-edit/ProfileBasicform.vue'

const { myResume } = storeToRefs(useUserStore())
const { actions } = useUserStore()

const basicDataValues = ref({
  username: '',
  year: '',
  position: [],
  salary: 0,
})

watch(myResume, (resume) => {
  if (resume) {
    basicDataValues.value = {
      username: resume.username || '',
      year: resume.year || '',
      position: resume.position || [],
      salary: resume.salary || 0,
    }
  }
})

const isVisibleBasicData = ref(false)
const isVisibleExperience = ref(false)
const isVisibleEducation = ref(false)
const isVisibleAboutMe = ref(false)
const isVisibleLanguage = ref(false)

onMounted(() => {
  actions.getUserData()
  actions.getMyResume()
})
</script>

<template>
  <div class="container mx-auto px-5">
    <div class="max-w-full w-5/6 bg-white mx-auto mt-10 p-5">
      <div class="flex items-center gap-6 justify-between p-5 rounded bg-lightGrey">
        <div class="flex items-center gap-6">
          <Avatar icon="pi pi-user" class="mr-2 !w-36 !h-36" size="xlarge" shape="circle" />
          <div class="text-customBlack">
            <div class="flex items-center ">
              <p class="font-semibold">{{ myResume?.username }}</p>
              <p class="ml-2 mr-4">{{ myResume?.year }} года</p>
              <p class="flex items-center gap-1.5 text-customPink">
                <img :src="KeysIcon" alt="розовый кейс" width="16" height="13" />
                {{ myResume?.salary }} ₽
              </p>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <p
                v-for="(position, id) in myResume?.position"
                class="text-customGray"
                :key="`resume-position-${id}`"
              >
                {{ position?.name }}
              </p>
            </div>
          </div>
        </div>
        <div @click="isVisibleBasicData = !isVisibleBasicData" class="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <i class="pi pi-pen-to-square !text-lg text-customBlack"></i>
        </div>
      </div>
       <div
            v-for="(experience, id) in myResume?.experience" 
            :key="`resume-experience-${id}`"
            class=" flex items-center justify-between gap-6 grid grid-cols-3 mt-10 "
          > 
            <div>
            <p class="text-customBlack font-semibold text-xl mb-3 ">Опыт работы</p>
            <p class="text-customBlack">{{ experience?.position }}</p>
            <p class="text-customGray">{{ experience?.company }}</p>
            <p class="text-customGray">{{ experience?.start_date }} - {{ experience?.end_date }}</p>
            </div>
            <div>
              <ul v-if="Array.isArray(experience?.responsibilities)">
              <li
                v-for="(item, idx) in experience.responsibilities"
                :key="`responsibility-${id}-${idx}`"
                class="text-customBlack ml-4 list-disc"
              >
                {{ item }}
              </li>
            </ul>
            </div>
          <div class="w-10 h-10 rounded-full bg-white flex justify-center items-center">
            <i class="pi pi-pen-to-square !text-lg text-customBlack"></i>
          </div>
          <div class="flex items-center justify-between gap-6 mt-10 ">
            <div>
              <p class="text-customBlack font-semibold text-xl mb-3 ">Навыки</p>
            <ul v-if="Array.isArray(myResume?.skills)">
              <li
                v-for="(skill, idx) in myResume.skills"
                :key="`skill-${idx}`"
                class="text-customBlack ml-4 list-disc"
              >
                {{ skill }}
              </li>
            </ul>
            </div>
            <div class="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <i class="pi pi-pen-to-square !text-lg text-customBlack"></i>
            </div>
          </div>
      </div>
    </div>
  <Dialog
    header="Основные данные"
    v-model:visible="isVisibleBasicData"
    :style="{width: '31.25rem'}"
    class="!text-customBlack "
  >
    <ProfileBasicform v-model:basicDataValues="basicDataValues" />
  </Dialog>
  </div>
</template>

<style scoped> </style>