<template>
    <div>
        <div class="user">
            <h3>用户信息</h3>
            <h4>{{person}}</h4>
            <h4>姓名: {{name}}</h4>
            <p>年龄: {{age}}</p>
            <p>薪资: {{job.j1.salary}}</p>
            <ul class="btn-area">
                <li>
                    <button @click="name+='~'">修改姓名</button>
                </li>
                <li>
                    <button @click="age++">修改年龄</button>
                </li>
                <li>
                    <button @click="job.j1.salary++">涨薪</button>
                </li>
            </ul>
        </div>
        <div class="count">
            <h4>数字: {{counter.x}}</h4>
            <button class="btn" @click="counter.x++">数字自增</button>
            <button class="btn" @click="counter={x:999}">数字替换</button>
        </div>
    </div>
</template>

<script>
import { toRefs, reactive,ref,shallowRef } from "vue";
import { shallowReactive } from "@vue/reactivity";
export default {
    name: "ShallowReactive&ShallowRef",
    setup() {
        let person = shallowReactive({
            name: "Nicholas Zakas",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });
        // shallowRef实现的仅仅是counter对象的响应式,但是并没有实现counter对象中x属性的响应式
        let counter = shallowRef({
            x: 0,
        });

        return {
            person,
            counter,
            ...toRefs(person),
        };
    },
};
</script>

<style scoped>
.btn-area li {
    margin-bottom: 20px;
}
</style>