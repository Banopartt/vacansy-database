<template>
    <div>

    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

 const {actions: userActions} = useUserStore()

onMounted(()=> {
    userActions.init()
})
</script>

<style scoped>

</style>