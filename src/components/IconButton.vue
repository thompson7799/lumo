<script lang="ts" setup>
const props = defineProps<{
  bgColor: string;
  iconClass: string;
  size?: 'sm' | 'md' | 'lg';
}>()

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg'
}

const currentSize = props.size || 'md';
</script>

<template>
  <button :class="`${bgColor} ${sizeClasses[currentSize]} hover:opacity-80 text-white rounded-full flex items-center justify-center transition-opacity duration-200 shadow-sm`">
    <i :class="iconClass"></i>
  </button>
</template>