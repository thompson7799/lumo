<script lang="ts" setup>
import SectionCard from "@/components/SectionCard.vue"
import dataJson from "@/assets/data.json"
import { useSections } from '@/composables/useSections'

const { sections, togglePin, loadSections } = useSections()

loadSections(dataJson)
</script>

<template>
  <div class="min-h-screen min-w-screen bg-gray-50 py-8 px-4 flex justify-center">
    <div class="max-w-4xl flex flex-col gap-3">
      <SectionCard 
        v-for="(section, index) in sections" 
        :key="section.id" 
        :section="section"
        @togglePin="togglePin(index)"
      />
    </div>
  </div>
</template>

