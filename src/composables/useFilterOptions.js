import { onMounted, ref } from 'vue'
import { http } from '@/api/http.js'

export const useFilterOptions = () => {
  const category = ref(null)
  const compensation = ref(null)
  const level = ref(null)
  const location = ref(null)
  const isOptionsLoading = ref(false)

  const filter = ref({
    categories: [], // массив ID выбранных категорий
    compensations: [],
    levels: [],
    locations: [],
  })
  const fetchCategories = async () => {
    try {
      isOptionsLoading.value = true
      const data = (await http.get('/categories')).data
      category.value = data.filter((item) => item.type === 'category')
      compensation.value = data.filter((item) => item.type === 'compensation')
      level.value = data.filter((item) => item.type === 'level')
      location.value = data.filter((item) => item.type === 'location')
      isOptionsLoading.value = false
    } catch (err) {
      console.log(err)
    } finally {
      isOptionsLoading.value = false
    }
  }
  const clearFilters = () => {
    filter.value.categories = []
    filter.value.compensations = []
    filter.value.levels = []
    filter.value.locations = []
  }

  return {
    fetchCategories,
    category,
    compensation,
    level,
    location,
    filter,
    isOptionsLoading,
    clearFilters
  }
}
