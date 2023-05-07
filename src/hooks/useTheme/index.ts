import { ref, watch } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

import { Theme } from './type'

const useTheme = defineStore(
  'theme',
  () => {
    const theme = ref('light')
    const toggle = (val: Theme) => (theme.value = val)

    watch(theme, (newVal, oldVal) => {
      document.querySelector('html')?.classList.remove(oldVal)
      document.querySelector('html')?.classList.add(newVal)
    })

    return { theme, toggle }
  },
  {
    persist: true
  }
)

export default useTheme
