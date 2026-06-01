<template>
  <nav>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link
          v-if="!link.rol_access && !is_authenticated"
          :to="link.path"
          >{{ link.name }}</router-link
        >
      </li>

      <li v-for="(link, index) in links" :key="index">
        <router-link
          v-if="link.rol_access && is_authenticated"
          :to="link.path"
          >{{ link.name }}</router-link
        >
      </li>
    </ul>
    <p><mdicon name="user" />   {{ auth_user }}</p>
  </nav>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const authStore = useAuthStore();
const { rol_user, authenticated, auth_user } = storeToRefs(authStore);

const is_authenticated = computed(() => {
  console.log(authenticated.value);
  return authenticated.value;
});
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  rol_user: {
    type: String,
    required: true,
  },
});
console.log(props.links);
</script>
<style scoped>
nav {
  margin: 0 auto;
}
nav,
ul {
  display: flex;
}
ul {
  list-style: none;
  li {
    margin: 20px;

    a {
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      padding: 10px 20px;
    }
  }
}
.router-link-active {
  background-color: #0b7b8d;
}
</style>
