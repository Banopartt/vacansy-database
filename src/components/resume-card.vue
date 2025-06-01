<script setup>
import KeysIcon from '@/assets/images/keys.png'
import { extractFirstName } from '@/lib/extractFirstName.js'
import { shortDescription } from '@/lib/shortDescription.js'

const { resume } = defineProps(['resume'])
</script>

<template>
  <div class="h-60 bg-white p-7 text-customBlack font-rubik">
    <div class="flex items-center gap-3">
      <b>{{ extractFirstName(resume?.name) || 'Имя не указано' }}</b>
      <p class="font-light">{{ resume?.age ? `${resume?.age} года` : 'Возраст не указан' }}</p>
      <p class="flex items-center gap-1.5 text-customPink font-normal">
        <img :src="KeysIcon" alt="розовая сумка в виде кейса" width="16" height="13" />
        {{ resume?.salary ? `${resume?.salary + '0'} ₽` : 'Зарплата не указана' }}
      </p>
    </div>
    <p class="mt-4">
      {{ shortDescription(resume?.description) || 'Описание не указано' }}
    </p>
    <p class="text-customGray font-normal mt-4">
      {{ resume?.jobTitle || 'Позиция не указана' }}
    </p>
  </div>
</template>

<style scoped></style>
