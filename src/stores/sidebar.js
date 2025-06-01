import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
    const isOpenSidebar = ref(false)

    const handleopenSidebar = () => {
        isOpenSidebar.value =!isOpenSidebar.value
    }

    return {
        isOpenSidebar,
        actions: {
            handleopenSidebar,
        }
    }
} )