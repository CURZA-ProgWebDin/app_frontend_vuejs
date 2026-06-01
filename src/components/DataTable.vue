<template>
  <section>
    <table>
      <thead>
        <tr>
          <th v-for="head in headers" :key="head">{{ head }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in items" :key="row.id">
          {{}}
          <td v-for="cell in row" :key="cell">{{ cell }}</td>
          <td v-if="acciones">
            <button @click="$emit('editar', row[0])">Editar</button>
            <button @click="$emit('eliminar', row[0])">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  acciones: {
    type: Boolean,
    default: true,
  },
});

const items = computed(() => {
  const values = props.data.map((item) => {
    const row = [];
    for (const key in item) {
      if (props.headers.includes(key.toUpperCase())) {
        row.push(item[key]);
      }
    }
    return row;
  });
  return values;
});
</script>

<style scoped></style>
