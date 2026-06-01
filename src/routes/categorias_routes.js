export const categorias_routes = [
  {
    path: "/categorias",
    component: () => import("../views/CategoriasView.vue"),
    name: "Categorias",
    children: [
      {
        path: "create",
        name: "CategoriasCreate",
      },
      {
        path: "",
        name: "CategoriasList",
        component: () => import("../components/CategoriasList.vue"),
        meta: {
          rol_access: ["admin", "editor"],
          required_auth: true,
        },
      },
      {
        path: ":id",
        name: "CategoriaDetail",
        meta: {
          rol_access: ["admin", "editor"],
          required_auth: true,
        },
        children: [
          {
            path: "productos",
            name: "CategoriasProductos",
            meta: {
              rol_access: ["admin", "editor"],
              required_auth: true,
            },
          },
        ],
      },
    ],
    meta: {
      rol_access: ["admin", "editor"],
      required_auth: true,
    },
  },
];
