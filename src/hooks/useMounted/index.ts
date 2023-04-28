import { getCurrentInstance, onMounted, ref } from 'vue-demi'

export default function useMounted() {
  const isMounted = ref(false)

  if (getCurrentInstance()) onMounted(() => (isMounted.value = true))

  return isMounted
}
