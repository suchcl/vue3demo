import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const User = () => import("../components/User");
const HelloWorld = () => import("../components/HelloWorld");

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
        meta: {
            title: "欢迎页"
        }
    },
    {
        path: "/user",
        name: "User",
        component: User,
        meta: {
            title: "用户列表"
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;