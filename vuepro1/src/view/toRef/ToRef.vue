<template>
    <div class="ref">
        <!-- <h2>姓名: {{person.name}}</h2>
        <h2>年龄: {{person.age}}</h2>
        <h2>工资: {{person.job.j1.salary}}k</h2> -->
        <!-- <ul class="btn-area">
            <li>
                <button @click="person.name+='~'">修改姓名</button>
            </li>
            <li>
                <button @click="person.age++">修改年龄</button>
            </li>
            <li>
                <button @click="person.job.j1.salary++">涨薪</button>
            </li>
        </ul> -->
        <!--setup中给我们返回了只有一个层级的字段,直接使用吧-->
        <h3>person: {{person}}</h3>
        <h2>姓名: {{name}}</h2>
        <h2>年龄: {{age}}</h2>
        <h2>工资: {{job.j1.salary}}k</h2>
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
</template>
<script>
import { ref, reactive, toRef, toRefs } from "vue";
export default {
    setup() {
        let person = reactive({
            name: "Nicholas Zakas",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });

        // return {
        //     person,
        // };

        // return {
        //     // 我们通过在return数据的时候,直接返回需要的字段,来解决模板中使用字段层级过深的问题
        //     // 通过使用toRef()函数创建指向另一个对象中的某个属性
        //     name: toRef(person,"name"),
        //     age: toRef(person,"age"),
        //     salary: toRef(person.job.j1,"salary")
        // }

        // return {
        //     person,
        //     // ref,创建了新的响应式对象,但没有和源数据关联上
        //     name: ref(person.name),
        //     age: ref(person.age),
        //     salary: ref(person.job.j1.salary),
        // };

        return {
            person,
            ...toRefs(person)
        }
    },
};
</script>

<style scoped>
.btn-area li {
    margin-bottom: 20px;
}
</style>