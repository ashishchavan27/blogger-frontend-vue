import {
    createRouter, 
    createWebHistory
} from "vue-router";
import HelloWorld from "../views/HelloWorld.vue"

const routes = [{
    path: "/",
    name: "hello-world",
    component: HelloWorld,
}];

const router = createRouter({
    mode: history,
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;