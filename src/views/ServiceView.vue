<template>
    <div class="container mx-auto px-5 font-sans">
        <section class="bg-white py-10 text-center">
        <h2 class="text-3xl font-bold mb-6">Наши услуги</h2>
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div class="p-6 border rounded shadow bg-white">
            <h3 class="text-xl font-semibold">Размещение вакансии</h3>
            <p class="mt-2 text-customGrey">490 руб.</p>
          </div>
          <div class="p-6 border rounded shadow bg-white">
            <h3 class="text-xl font-semibold">Аудит вакансии</h3>
            <p class="mt-2 text-customGrey">490 руб.</p>
          </div>
          <div class="p-6 border rounded shadow bg-white">
            <h3 class="text-xl font-semibold">Видео-собеседование</h3>
            <p class="mt-2 text-customGrey">490 руб.</p>
          </div>
          <div class="p-6 border rounded shadow bg-white md:col-span-3">
            <h3 class="text-xl font-semibold">Удалённый отдел под ключ</h3>
            <p class="mt-2 text-customGrey">от 490 000 руб.</p>
          </div>
        </div>
      </section>
  
      <section class="bg-green-400 py-10 text-center text-white">
        <h2 class="text-3xl font-bold mb-6">Обучение</h2>
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div class="p-6 border rounded shadow bg-white text-customBlack">
            <h3 class="text-xl font-semibold">Обучающий курс</h3>
            <p class="mt-2">490 руб.</p>
          </div>
          <div class="p-6 border rounded shadow bg-white text-customBlack">
            <h3 class="text-xl font-semibold">Шаблоны документов «Удалёнка»</h3>
            <p class="mt-2">990 руб.</p>
          </div>
          <div class="p-6 border rounded shadow bg-white text-customBlack">
            <h3 class="text-xl font-semibold">Корпоративный тренинг «Убойная удалёнка»</h3>
            <p class="mt-2">от 490 000 руб.</p>
          </div>
        </div>
      </section>
  
      <section class="bg-slate-800 text-white py-10 px-4 text-center">
        <h2 class="text-2xl font-bold mb-6">Ответим на любые ваши вопросы</h2>
        <form class="max-w-xl mx-auto grid gap-4 text-left">
          <input type="text" placeholder="Имя" class="p-3 rounded bg-white text-customBlack" />
          <input type="text" placeholder="Телефон или email" class="p-3 rounded bg-white text-customBlack" />
          <textarea rows="4" placeholder="Описание" class="p-3 rounded bg-white text-customBlack"></textarea>
          <button type="submit" class="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded">
            Отправить
          </button>
        </form>
      </section>
  
    </div>
  </template>

<script setup>
</script>

<style scoped>
</style>