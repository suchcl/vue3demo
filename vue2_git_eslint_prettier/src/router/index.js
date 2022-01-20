import { createRouter, createWebHashHistory } from "vue-router";

// 用户列表
const User = () => import("../pages/User.vue");
// 个人中心
const Profile = () => import("../pages/Profile.vue");
// UI Demo测试
const UI = () => import("../pages/ElementDemo.vue");

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/user",
            component: User,
            meta: {
                title: "用户列表"
            }
        },
        {
            path: "/profile",
            component: Profile,
            meta: {
                title: "个人资料"
            }
        },
        {
            path: "/ui",
            component: UI,
            meta: {
                title: "UI 案例"
            }
        }
    ]
});

export default router;
