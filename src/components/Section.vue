<script lang="ts">
export default {
  name: "Section",
  props: {
    title: String,
    description: String,
    note: String,
    startDate: String,
    endDate: String,
    hours: Number,
    totalHours: Number,
    isPinned: Boolean,
  },
};
</script>

<!--
  1. Add a computed method to format the dates as follows
    - If start date and end date is the same only, or either is null only show 1 date e.g. 1 Jan
    - If start date and end date is in the same month only show days and month e.g. 1 - 31 Jan
    - If start date and end date are in different months, show date and month e.g. 1 Jan - 28 Feb

  2. Add a computed method to format the hours as follows
    - If hours < 10, show 1 decimal
    - If hours > 10, dont show decimals

  3. Style according to specification

  4. Make responsive

  5. Show all records & rotate pin if true (class fa-rotate-90)
-->

<template>
  <table>
    <colgroup>
      <col style="width: 100%" />
      <col style="min-width: 60px; width: 60px" />
    </colgroup>
    <tbody>
      <tr>
        <td class="title">
          <i class="fa fa-fw fa-thumbtack"></i>
          {{ title }}
        </td>
        <td class="actions" rowspan="2">
          <i class="fa fa-check-circle"></i>
          <i class="fa fa-play-circle"></i>
        </td>
      </tr>
      <tr>
        <td class="description">{{ description }}</td>
      </tr>
      <tr>
        <td>
          <div class="note">
            <span>{{ note }}</span>
          </div>
          <div class="date">
            <span> {{ startDate }} - {{ endDate }} </span>
          </div>
        </td>
        <td>{{ hours }} of {{ totalHours }}h</td>
      </tr>
    </tbody>
  </table>
</template>



<style scoped>
.note {
  float: left;
}

.date {
  float: right;
}
</style>
