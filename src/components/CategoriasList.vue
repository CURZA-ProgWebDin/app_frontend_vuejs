<template>
  <section>
    <template v-if="cargando"> <p>cargando...</p> </template>
    <template v-else>
      <h3 v-if="listCategorias.length === 0">SIN DATOS</h3>
      <DataTable
        v-else
        :headers="['ID', 'NOMBRE', 'ACTIVO', 'ACCIONES']"
        :data="listCategorias"
      />
    </template>
  </section>
</template>
<script setup>
import { categoriasProductos } from "../services/categorias";
import { onMounted, ref } from "vue";
import DataTable from "./DataTable.vue";
const listCategorias = ref([]);
const cargando = ref(false);

onMounted(() => {
  cargando.value = true;
  setTimeout(() => {
    listCategorias.value = categoriasProductos;
    cargando.value = false;
  }, 1000);
});
function eliminar(id) {
  console.log(id);
  listCategorias.value = listCategorias.value.filter((cat) => cat.id != id);
}
function editar(id) {
  console.log(id);
}
</script>
<style scoped>
section {
  margin: 0 auto;
  width: 100%;
}
table {
  width: 100%;
}
button {
  width: 75px;
  text-transform: uppercase;
  background-color: rgb(115, 115, 62);
  border-radius: 5px;
  border: none;
  padding: 10px 5px;
  margin: 10px;
}
</style>
