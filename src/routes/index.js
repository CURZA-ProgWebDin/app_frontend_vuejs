import { createRouter, createWebHistory } from "vue-router";
import { productos_routes } from "./productos_routes";
import { categorias_routes } from "./categorias_routes";
import { auth_routes } from "./auth_routes.js";
import { useAuthStore } from "../stores/auth.js";
import { storeToRefs } from "pinia";
const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
    name: "Home",
    meta: {
      required_auth: false,
    },
  },
  {
    path: "/about",
    component: () => import("../views/AboutView.vue"),
    name: "About",
    meta: {
      rol_access: ["admin", "visitor", "editor", "user"],
      required_auth: false,
    },
  },
  ...categorias_routes,
  ...productos_routes,
  ...auth_routes,
];

export const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  const { authenticated, rol_user } = storeToRefs(authStore);
  // SI EL USUARIO NO ESTA AUTENTICADO Y LA RUTA REQUIERE AUTENTICACION, REDIRIGE AL LOGIN
  if (to.meta.required_auth && !authenticated.value) {
    return { name: "Login" };
  }
  // SI EL USUARIO ESTA AUTENTICADO PERO NO TIENE EL ROL NECESARIO PARA ACCEDER A LA RUTA, REDIRIGE AL HOME
  if (to.meta.rol_access && !to.meta.rol_access.includes(rol_user.value)) {
    return { name: "Home" };
  }
});
