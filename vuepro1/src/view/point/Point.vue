<template>
    <div class="point-wrap">
        <div class="pos">
            <h3>点击位置: x: {{point.x}}, y: {{point.y}}</h3>
        </div>
    </div>
</template>

<script>
// 导入一个hook函数
import usePoint from "../../hooks/usePoint";
export default {
    setup() {
        // 使用hook
        // 调用的地方干净、利落
        let point = usePoint();
        return {
            point
        };
    },
};
</script>

<style scoped>
.point-wrap {
    padding: 20px;
    background-color: blanchedalmond;
}
.btn {
    cursor: pointer;
    padding: 4px 15px;
}
</style>