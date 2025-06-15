<script setup>
const { order } = defineProps(['order'])
</script>

<template>
  <div class="w-full min-h-36 p-7 bg-white shadow-lg mt-5">
    <p v-if="order.name" class="text-customBlack text-xl font-medium">
      {{ order?.name }}
    </p>
    <template v-else>
      <p
        v-for="(item, id) in order.items"
        :key="`order-item-id-${id}`"
        class="text-customBlack text-xl font-medium"
      >
        {{ item }}
      </p>
    </template>
    <p class="text-customGray my-4 font-normal text-sm">
      {{ order?.date }}
    </p>
    <span class="text-customPink font-normal text-sm">
      {{ order?.price }}
    </span>
  </div>
</template>

<style scoped></style>