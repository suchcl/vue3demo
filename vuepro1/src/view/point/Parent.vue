<template>
    <div class="point">
        <button
            class="btn"
            @click="showCmp"
        >{{info.showButtonText}}</button>
        <div class="temp">
            <Point v-if="info.isShow" />
        </div>
    </div>
</template>

<script>
import Point from "./Point.vue";
import { reactive } from "vue";
export default {
    components: {
        Point,
    },
    setup() {
        let info = reactive({
            showButtonText: "隐藏",
            isShow: true,
        });

        function showCmp() {
            info.isShow = !info.isShow;
            info.showButtonText = info.isShow ? "展示" : "隐藏";
        }
        return {
            info,
            showCmp,
        };
    },
};
</script>
<style scoped>
.point {
    padding-top: 20px;
}
.btn {
    padding: 4px 15px;
}
</style>