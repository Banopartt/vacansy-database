<template>
  <form @submit.prevent >
    <div class="flex flex-col ">
      <label>Имя</label>
      <InputText v-model="basicDataValues.username" class="!bg-lightGrey !text-customBlack mt-3 !border-none"/>
    </div>
    <div class="flex flex-col mt-7 ">
      <label>Возраст</label>
      <InputText v-model="basicDataValues.year" type="number" class="!bg-lightGrey !text-customBlack mt-3 !border-none"/>
    </div>
    <div class="flex flex-col  mt-7">
      <label>Категории</label>
      <Chips
        v-model="positionNames"
        class="!bg-lightGrey !text-customBlack mt-3 !border-none"
        removable
        add-on
        placeholder="Введите категорию"
    />
    </div>
    <div class="flex flex-col mt-7">
      <label>Желаемая оплата (в рублях)</label>
      <InputText v-model="basicDataValues.salary" type="number" class="!bg-lightGrey !text-customBlack mt-3 !border-none"/>
    </div>
    <Button type='submit' class="!border-customPink !text-customPink w-full mt-7" variant="outlined">
        Сохранить
    </Button>
  </form>
</template>

<script setup>
import { Button, Chips, InputText } from 'primevue';
import { computed } from 'vue';

const basicDataValues = defineModel("basicDataValues")

const positionNames = computed({
    get: () => basicDataValues.value.position.map(p => p.name),
    set: (names) => {
        basicDataValues.value.position = names.map((n, idx) => ({
            id: idx + 1,
            name: n.trim()
        })).filter(p => p.name.length > 0);
    }
})

const handleEditProfileBasic = async ()=> {
  try{

  }catch (e) {

  }
}


</script>

<style  scoped>

</style>