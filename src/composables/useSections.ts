import { ref } from 'vue'
import type { Section } from '@/types/section'

export function useSections() {
  const sections = ref<Section[]>([])


  const togglePin = (index: number) => {
    const section = sections.value[index]
    if (section) {
      sections.value[index] = { ...section, isPinned: !section.isPinned }
    }
  }

  const loadSections = (data: Section[]) => {
    sections.value = data
  }

  return {
    sections,
    togglePin,
    loadSections
  }
}