import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { http } from '@/api/http.js'
import { LOCALSTORAGE } from '@/const/localStorage.js'
import { ROLES } from '@/const/roles.js'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const myResume = ref({})
  const getUserData = async () => {
    try {
      const res = await http.get('/auth_me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE.TOKEN)}`,
        },
      })
      user.value = res?.data
    } catch (e) {
      console.error(e)
    }
  }

  const getMyResume = async () => {
    try{
      const res = await http.get('/my-resume')
      myResume.value = res.data[0] || {}
    } catch (e) {
      console.error(e)
    }
  }

  const init = async ()=> {
    const token = localStorage.getItem(LOCALSTORAGE.TOKEN)
    if (token) {
      await getUserData()
    }
  }

  const handleExit = () => {
    localStorage.removeItem(LOCALSTORAGE.TOKEN)
    for (let key in user.value) {
      delete user.value[key]
    }
    router.push('/')
  } 

  const isLoginUser = computed(() => user.value?.id && localStorage.getItem(LOCALSTORAGE.TOKEN))

  const isCompanyRole = computed(() => user.value.role === ROLES.COMPANY)
  const isEmployeeRole = computed(() => user.value.role === ROLES.EMPLOYEE)
  return {
    user,
    myResume,
    actions: {
      getUserData,
      getMyResume,
      init,
      handleExit
    },
    getters: {
      isLoginUser,
      isCompanyRole,
      isEmployeeRole,
    },
  }
})
