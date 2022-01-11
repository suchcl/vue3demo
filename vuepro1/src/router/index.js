import { createRouter, createWebHistory } from "vue-router";
import Ref from "../components/Ref.vue";
// 静态引入
import Hello from "../components/HelloWorld.vue";
// 动态引入: 在使用的时候才去引入
const ReactTive = () => import("../components/Reactive.vue");
const Setup = () => import("../view/setup/Setup.vue");
const Computed = () => import("../view/computed/Computed.vue");
const Watch = () => import("../view/watch/Watch.vue");
const WatchEffect = () => import("../view/watchEffect/WatchEffect.vue");
const Point = () => import("../view/point/Parent.vue");
const ToRef = () => import("../view/toRef/ToRef.vue");
const ShallowReactiveShallowRef = () => import("../view/shallowRefReactive/Shallow.vue");
const ReadOnly = () => import("../view/readonly/Readonly.vue");
const Raw = () => import("../view/toRawmarkRaw/Raw.vue");
const CustomRef = () => import("../view/customRef/CustomRef.vue");
const Provide = () => import("../view/provide-inject/Provide.vue");
const IsRes = () => import("../view/isRes/IsRes.vue");
const Teleport = () => import("../view/teleport/Parent.vue");
const Suspense = () => import("../view/suspense/Parent.vue");

const router = createRouter({
    history: createWebHistory(),
    base: window.__MICRO_APP_BASE_URL__ || '/',
    routes: [
        {
            path: "/hello",
            component: Hello,
            meta: {
                title: "欢迎页"
            }
        },
        {
            path: "/ref",
            component: Ref,
            meta: {
                title: "ref函数测试"
            }
        },
        {
            path: "/reactive",
            component: ReactTive,
            meta: {
                title: "Reactitve"
            }
        },
        {
            path: "/setup",
            component: Setup,
            meta: {
                title: "setup函数测试"
            }
        },
        {
            path: "/computed",
            component: Computed,
            meta: {
                title: "计算属性"
            }
        },
        {
            path: "/watch",
            component: Watch,
            meta: {
                title: "Watch监听函数"
            }
        },
        {
            path: "/watchEffect",
            component: WatchEffect,
            meta: {
                title: "WatchEffect"
            }
        },
        {
            path: "/point",
            component: Point,
            meta: {
                title: "获取鼠标点击位置坐标"
            }
        },
        {
            path: "/toRef",
            component: ToRef,
            meta: {
                title: "ToRef"
            }
        },
        {
            path: "/shallow",
            component: ShallowReactiveShallowRef,
            meta: {
                title: "shallowReact&shallowRef"
            }
        },
        {
            path: "/readonly",
            component: ReadOnly,
            meta: {
                title: "readonly&shallowReadonly"
            }
        },
        {
            path: "/raw",
            component: Raw,
            meta: {
                title: "toRaw&markRaw"
            }
        },
        {
            path: "/customRef",
            component: CustomRef,
            meta: {
                title: "CustomRef"
            }
        },
        {
            path: "/provide",
            component: Provide,
            meta: {
                title: "Provide&Inject"
            }
        },
        {
            path: "/isres",
            component: IsRes,
            meta: {
                title: "响应式对象判断"
            }
        },
        {
            path: "/teleport",
            component: Teleport,
            meta: {
                title: "Teleport"
            }
        },
        {
            path: "/suspense",
            component: Suspense,
            meta: {
                title: "Suspense"
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta) {
        document.title = to.meta.title
    }
    next();
});

export default router;