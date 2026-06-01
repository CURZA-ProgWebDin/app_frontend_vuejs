import AuthService from "../service/AuthService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const auth_user = ref(null);
  const authenticated = ref(false);
  const jwt = ref("");
  const rol_user = ref("");
  const service = new AuthService();

  async function login(user) {
    await service.login(user);
    if (service.auth_user) {
      const user = service.auth_user;
      auth_user.value = user.nombre;
      jwt.value = user.access_token;
      authenticated.value = user.authenticated;
      rol_user.value = user.rol;
    }
    console.log(
      "auth store",

      auth_user.value,
      jwt.value,
      authenticated.value,
      rol_user.value,
    );
  }
  function logout() {
    auth_user.value = null;
    jwt.value = "";
    authenticated.value = false;
    rol_user.value = "";
  }
  async function register(new_user) {
    await service.register(new_user);
  }

  return { auth_user, jwt, rol_user, authenticated, login, logout, register };
});
