<script lang="ts" setup>
import { ref } from 'vue';
import Section from "./components/Section.vue";
import dataJson from "./assets/data.json";
import type { Section as SectionType } from "./types/section";

const SectionData = ref<SectionType[]>(dataJson);
</script>

<template>
  <div class="min-h-screen min-w-screen bg-gray-50 py-8 px-4 flex justify-center">
    <div class="max-w-4xl flex flex-col gap-3">
      <Section v-for="(section, index) in SectionData" :key="section.id" v-model="SectionData[index]" />
    </div>
  </div>
</template>

