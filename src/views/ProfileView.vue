<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import { onMounted } from 'vue'

const route = useRoute()

const { user } = storeToRefs(useUserStore())
const { actions } = useUserStore()

onMounted(() => {
  actions.getUserData()
})
</script>

<template>
    <div>

    </div>

</template>

<style scoped></style>
