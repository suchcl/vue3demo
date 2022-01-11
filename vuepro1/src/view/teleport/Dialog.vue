<template>
    <button @click="isShow=true">弹出弹窗</button>
    <teleport to="body">
        <div class="mask" v-if="isShow">
            <div class="dialog">
                <h3>车辆信息</h3>
                <h4>品牌: {{name}}</h4>
                <p>价格: {{price}}</p>
                <button @click="isShow=false">关闭弹窗</button>
            </div>
        </div>
    </teleport>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
export default {
    setup() {
        let isShow = ref(false);

        let car = reactive({
            name: "奔驰",
            price: 40,
        });
        return {
            isShow,
            ...toRefs(car),
        };
    },
};
</script>

<style scoped>
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
.dialog {
    text-align: center;
    color: #fff;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: teal;
}
</style>