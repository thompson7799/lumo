import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SectionCard from '@/components/SectionCard.vue'
import type { Section as SectionType } from '@/types/section'

describe('SectionCard', () => {
  const mockSection: SectionType = {
    id: 1,
    title: 'Test Section',
    description: 'Test description',
    note: 'Test note',
    startDate: '2023-01-01',
    endDate: '2023-01-31',
    hours: 40,
    totalHours: 160,
    isPinned: false
  }

  it('emits togglePin when thumbtack is clicked', async () => {
    const wrapper = mount(SectionCard, {
      props: {
        section: mockSection
      }
    })

    const thumbtack = wrapper.find('.fa-thumbtack')
    expect(thumbtack.exists()).toBe(true)

    await thumbtack.trigger('click')

    const emitted = wrapper.emitted('togglePin')
    expect(emitted).toHaveLength(1)
  })

  it('shows unpinned state initially when isPinned is false', () => {
    const wrapper = mount(SectionCard, {
      props: {
        section: mockSection
      }
    })

    const thumbtack = wrapper.find('.fa-thumbtack')
    expect(thumbtack.classes()).toContain('far')
    expect(thumbtack.classes()).toContain('text-gray-400')
    expect(thumbtack.classes()).not.toContain('text-orange-500')
    expect(thumbtack.classes()).not.toContain('rotate-45')
  })

  it('shows pinned state when isPinned is true', () => {
    const pinnedSection = { ...mockSection, isPinned: true }
    const wrapper = mount(SectionCard, {
      props: {
        section: pinnedSection
      }
    })

    const thumbtack = wrapper.find('.fa-thumbtack')
    expect(thumbtack.classes()).toContain('fa-thumbtack')
    expect(thumbtack.classes()).toContain('text-orange-500')
    expect(thumbtack.classes()).toContain('rotate-45')
    expect(thumbtack.classes()).not.toContain('far')
  })

  it('emits togglePin when clicked from pinned state', async () => {
    const pinnedSection = { ...mockSection, isPinned: true }
    const wrapper = mount(SectionCard, {
      props: {
        section: pinnedSection
      }
    })

    const thumbtack = wrapper.find('.fa-thumbtack')
    await thumbtack.trigger('click')

    const emitted = wrapper.emitted('togglePin')
    expect(emitted).toHaveLength(1)
  })
})
