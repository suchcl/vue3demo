<template>
    <div class="watcheffect">
        <div class="count">{{num}}</div>
        <button @click="num++">数字变了</button>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
    name: "WatchEffect",
    setup() {
        let num = ref(0);

        watchEffect(() => {
            //console.log("有数据变化了"); // 现在是不会执行的,因为没有使用到任何已经定义的数据(变量)
            let newNum = num.value; // 注意,这里使用了value属性,不使用value属性不会发生回调
            console.log("回调开始了");
        });
        return {
            num,
        };
    },
};
</script>

<style scoped>
    .watcheffect{
        padding: 20px;
        background-color: aquamarine;
    }
</style>