<script lang="ts" setup>
import IconButton from './ui/IconButton.vue'
import { getDateRange, formatHours } from '@/utils/dateUtils'
import type { Section } from '@/types/section'

defineProps<{
  section: Section
}>()

const emit = defineEmits<{
  'togglePin': []
}>()

const handlePinClick = () => {
  emit('togglePin')
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div class="flex gap-4">
      <div class="content-center">
        <i class="fa fa-fw fa-grip-vertical text-lg text-gray-400" />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            <i
              :class="[
                'fa fa-fw flex-none cursor-pointer transition-all duration-200 hover:scale-110',
                section.isPinned
                  ? 'fa-thumbtack text-orange-500 transform rotate-45'
                  : 'far fa-thumbtack text-gray-400 hover:text-orange-400'
              ]"
              @click="handlePinClick"
            ></i>
            <p class="text-xl sm:text-2xl font-semibold text-gray-900 truncate">{{ section.title }}</p>
          </div>
          <div class="flex-none flex gap-2">
            <IconButton size="sm" bg-color="bg-emerald-400" icon-class="fa fa-check" />
            <IconButton size="sm" bg-color="bg-blue-400" icon-class="fa fa-play" />
          </div>
        </div>
        <div class="mb-4">
          <p class="text-gray-600">{{ section.description }}</p>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div class="flex-1 min-w-0">
            <p class="text-gray-600 text-sm truncate">{{ section.note }}</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 sm:flex-shrink-0">
            <div class="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
              <i class="fa fa-calendar text-blue-500 text-xs"></i>
              <span class="text-sm font-medium text-blue-700 whitespace-nowrap">{{ getDateRange(section.startDate, section.endDate) }}</span>
            </div>
            <div class="flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full">
              <i class="fa fa-clock text-emerald-500 text-xs"></i>
              <span class="text-sm font-medium text-emerald-700 whitespace-nowrap">{{ formatHours(section.hours) }} of {{ formatHours(section.totalHours) }}h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
