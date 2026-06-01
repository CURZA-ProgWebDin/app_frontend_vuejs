<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import MenuNav from "./components/MenuNav.vue";
import { navegacion } from "./routes/navegacion.js";
import { useAuthStore } from "./stores/auth.js";
import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const rol_user = authStore.rol_user;
const { authenticated } = storeToRefs(authStore);
</script>

<template>
  <menu-nav :links="navegacion" :rol_user="rol_user" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s all ease-in-out;
}
</style>
