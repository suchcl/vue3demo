<template>
    <div class="provide">
        <h3>祖先组件: 汽车信息</h3>
        <h4>品牌:{{name}}</h4>
        <p>价格: {{price}}</p>
        <Child />
    </div>
</template>

<script>
import Child from "./Child.vue";
import { reactive, toRefs } from '@vue/reactivity'
import { provide } from '@vue/runtime-core';
    export default {
        components: {
            Child
        },
        setup(){
            let car = reactive({
                name: "奔驰",
                price: 40
            });

            provide("car",car);

            return {
                ...toRefs(car)
            };
        }
    }
</script>

<style scoped>
.provide {
    margin-top: 20px;
    padding: 20px;
    background-color: antiquewhite;
}
</style>