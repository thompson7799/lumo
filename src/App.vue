<script lang="ts">
import Section from "./components/Section.vue";
import data from "./assets/data.json";

export default {
  name: "App",
  components: {
    Section,
  },
  computed: {
    data() {
      return data;
    },
  },
};
</script>

<template>
  <table style="min-width: 300px; width: 100%">
    <colgroup>
      <col style="min-width: 20px; max-width: 20px; width: 20px" />
      <col style="width: auto" />
    </colgroup>
    <tbody>
      <tr>
        <td><i class="fa fa-fw fa-grip-vertical" /></td>
        <td>
          <Section v-bind="data[0]" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
}

table {
  table-layout: fixed;
}
</style>

