<template>
  <div>
    <UserNavbar v-if="userGetters.isLoginUser" />
    <NavbarWidget v-else />
    <SidebarWidget />
    <main>
      <slot></slot>
    </main>
    <FooterWidget />
  </div>
</template>

<script setup>
import FooterWidget from '@/components/widgets/footer-widget.vue'
import NavbarWidget from '@/components/widgets/navbar-widget.vue'
import SidebarWidget from '@/components/widgets/sidebar-widget.vue'
import { useUserStore } from '@/stores/user.js'
import UserNavbar from '@/components/widgets/user-navbar.vue'

const { getters: userGetters } = useUserStore()
</script>

<style scoped></style>
