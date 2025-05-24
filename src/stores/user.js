import { http } from "@/api/http";
import { LOCALSTORAGE } from "@/const/localStorage";
import { ROLES } from "@/const/roles";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref({})

    const getUserData = async () => {
        try {
            const res = await http.get('/auth_me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE.TOKEN)}`,
                },
            })
            user.value = res?.data
        } catch (e) {
            console.log(e);

        }
    }
const isLoginUser = computed(()=> user.value?.id && localStorage.getItem(LOCALSTORAGE.TOKEN))

const isCompanyRole = computed(()=> user.value.role === ROLES.COMPANY)
const isEmployeeRole = computed(()=> user.value.role === ROLES.EMPLOYEE)

return {
    user,
    actions: {
        getUserData,
    },
    getters: {
        isLoginUser,
        isCompanyRole,
        isEmployeeRole,
    },
}
})