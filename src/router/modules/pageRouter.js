const pageRouter = {
    path: "/",
    name: "layout",
    redirect: "/main",
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/main.vue"),
        },
        {
            path: "/book",
            name: "book",
            component: () => import("@/views/Books.vue"),
        },
        {
            path: "/reference",
            name: "reference",
            component: () => import("@/views/reference.vue"),
        },
        {
            path: "/movieclass",
            name: "movieclass",
            component: () => import("@/views/movieclass.vue"),
        },
        {
            path: "/classsample",
            name: "classsample",
            component: () => import("@/views/classsample.vue"),
        },
    ],
};
export default pageRouter;
