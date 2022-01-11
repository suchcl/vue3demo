<template>
    <div class="readonly">
        <div class="sum-wrap">
            <div class="sum">求和: {{sum}}</div>
            <button @click="sum++">求和</button>
        </div>
        <div class="user">
            <h3>用户信息</h3>
            <h4>姓名: {{name}}</h4>
            <p>年龄: {{age}}</p>
            <p>薪资: {{job.j1.salary}}</p>
            <ul class="btn-area">
                <li>
                    <button class="btn" @click="name+='~'">修改姓名</button>
                </li>
                <li>
                    <button class="btn" @click="age++">修改年龄</button>
                </li>
                <li>
                    <button class="btn" @click="job.j1.salary++">涨薪</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {ref,reactive,readonly,toRefs, shallowReadonly} from "vue";
export default {
    setup() {
        let sum = ref(0);
        let person = reactive({
            name: "Nicholas Zakas",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });
        sum = readonly(sum); // 经过readonly劫持后,就已经不能再对sum进行修改了,界面上的自增操作就不能再有响应式操作了,会有警告信息
        person = shallowReadonly(person); // 只监听对象的第一层属性是只读的,深层次的属性还是响应式的
        return {
            sum,
            ...toRefs(person),
        };
    },
};
</script>

<style scoped>
.readonly {
    margin-top: 20px;
    background-color: aquamarine;
    padding: 20px;
}
.sum {
    margin-bottom: 15px;
}
</style>