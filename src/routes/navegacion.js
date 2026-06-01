export const navegacion = [
  {
    path: "/",
    name: "Home",
    icon: "home",
    rol_access: ["admin", "visitor", "editor"],
  },
  {
    path: "/about",
    name: "About",
    icon: "info",
    rol_access: ["admin", "visitor", "editor"],
  },
  {
    path: "/categorias",
    name: "Categorias",
    icon: "list",
    rol_access: ["admin", "editor"],
  },
  {
    path: "/productos",
    name: "Productos",
    icon: "shopping-cart",
    rol_access: ["admin", "editor"],
  },
  {
    path: "/login",
    name: "Login",
    icon: "login",
  },
  {
    path: "/register",
    name: "Register",
    icon: "user-plus",
  },
];
