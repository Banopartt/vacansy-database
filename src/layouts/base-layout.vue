<template>
    <div>
        <NavbarWidget/>
        <SidebarWidget/>
        <main>
            <slot></slot>
        </main>
        <FooterWidget/>
    </div>
</template>

<script setup>
import FooterWidget from '@/components/widgets/footer-widget.vue';
import NavbarWidget from '@/components/widgets/navbar-widget.vue';
import SidebarWidget from '@/components/widgets/sidebar-widget.vue';


</script>

<style  scoped>

</style>