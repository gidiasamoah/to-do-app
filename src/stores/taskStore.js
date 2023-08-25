import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
    const inputText = ref("")
    const getInputText = computed(() => inputText.value)

    function setValue(input) {
        inputText.value = input
      }


  return { inputText, getInputText, setValue }
})
