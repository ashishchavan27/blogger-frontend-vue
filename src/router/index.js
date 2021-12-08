import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Main.vue";
import Feed from "../views/feed/Main.vue";
import CreatePost from "../views/posts/Create.vue";
import Explore from "../views/posts/View.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/explore",
        name: "explore",
        component: Explore,
    },
    {
        path: "/feed",
        name: "feed",
        component: Feed,
    },
    {
        path: "/create-post",
        name: "create-post",
        component: CreatePost,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
];

const router = createRouter({
    mode: history,
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
