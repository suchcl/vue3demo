<template>
    <div class="son">
        <h3>后代组件</h3>
        <h4>品牌: {{name}}</h4>
        <p>价格: {{price}}</p>
    </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
    setup() {
        let car = inject("car");
        return {
            ...car,
        };
    },
};
</script>

<style scoped>
.son {
    padding: 20px;
    background-color: teal;
}
</style>