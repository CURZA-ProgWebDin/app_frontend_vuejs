export const productos_routes = [
  {
    path: "/productos",
    name: "Productos",
    component: () => import("../views/ProductosView.vue"),
    children: [
      {
        path: "create",
        component: () => import("../components/ProductoCreate.vue"),
        name: "ProductosCreate",
        meta: {
          rol_access: ["admin", "editor"],
          required_auth: true,
        },
      },
      {
        path: "",
        component: () => import("../components/ProductosList.vue"),
        name: "ProductosList",
        meta: {
          rol_access: ["admin", "editor"],
          required_auth: true,
        },
      },
    ],
    meta: {
      rol_access: ["admin", "editor"],
      required_auth: true,
    },
  },
];
