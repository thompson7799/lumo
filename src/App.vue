<script lang="ts" setup>
import SectionCard from "@/components/SectionCard.vue"
import dataJson from "@/assets/data.json"
import { useSections } from '@/composables/useSections'

const { sections, togglePin, loadSections } = useSections()

loadSections(dataJson)
</script>

<template>
  <div class="min-h-screen w-full bg-gray-50 py-4 sm:py-8 px-2 sm:px-4 flex justify-center">
    <div class="w-full max-w-4xl flex flex-col gap-3">
      <SectionCard
        v-for="(section, index) in sections"
        :key="section.id"
        :section="section"
        @togglePin="togglePin(index)"
      />
    </div>
  </div>
</template>

