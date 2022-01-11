<template>
    <div class="watch">
        <div class="count">
            <h2>当前求和: {{sum}}</h2>
            <button @click="sum++">+1</button>
        </div>
        <div class="msg">
            <h2>当前信息: {{msg}}</h2>
            <button @click="msg+='!'">msg变了</button>
        </div>
        <div class="person">
            <div class="name">姓名: {{person.name}}</div>
            <div class="age">年龄: {{person.age}}</div>
            <div class="salary">薪资: {{person.job.j1.salary}}k</div>
            <button @click="person.name+='~'" class="btn">修改姓名</button>
            <br />
            <button @click="person.age++" class="btn">增加年龄</button>
            <br />
            <button @click="person.job.j1.salary++">涨薪</button>
        </div>
    </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
    name: "Watch",
    setup() {
        let sum = ref(0);
        let msg = ref("Hello Vue3");
        let person = reactive({
            name: "Nicholas Zakas",
            age: 18,
            job: {
                j1: {
                    salary: 20    
                }
            }
        });

        // 通过watch监听sum的变化
        // 监听ref定义的响应式数据的变化
        // 情况一:只监听了一个响应式数据的变化
        // watch(
        //     sum,
        //     function (newValue, oldValue) {
        //         console.log("监听了");
        //     },
        //     {
        //         immediate: true,
        //     }
        // );

        // 情况2:定义多个响应式数据
        // 监听多个响应式数据,可以将监听的数据使用[]括起来
        // 也可以执行多个watch函数,每个watch函数只监听一个响应式数据
        // vue2中,只能配置一个watch选项,但是Vue3中是组合式API,可以执行多个watch函数
        // watch(
        //     [sum, msg],
        //     (newValue, oldValue) => {
        //         console.log("两个数被监视了",newValue,oldValue);
        //     },
        //     {
        //         immediate: true,
        //     }
        // );
        // 情况3: 监听reactive定义的响应式
        // watch监听由reactive定义的响应式数据时,暂时无法获得oldValue,这是reactive实现的问题,暂时还没有好的解决办法
        // watch监听ref定义的响应式数据时,暂无问题
        // Vu3.0默认开启了deep监听,切不可以关闭
        // watch(person,(newValue,oldValue) => {
        //     console.log(`watch监听的响应式数据变了: `,newValue,oldValue);
        // },{
        //     deep: false // 此处的deep:false配置无效
        // });

        // 情况4:监听reactive定义的响应式对象中的某个具体的属性
        // 通过函数返回值的方式使用,watch正常情况下只能监听数组、ref和reactive定义的响应式数据
        // 比如需要监听年龄的变化
        // watch(() => { return person.age},(newValue,oldValue) => {
        //     console.log(`年龄变了: `,newValue,oldValue);
        // });

        // 情况5: 监听对象中的某些属性的变化
        // watch([() => person.name,() => person.age], (newValue,oldValue) => {
        //     console.log(`对象中的姓名或者年龄变了:`, newValue,oldValue);
        // })

        // 特殊情况:监听reactive定义的响应式数据中的对象属性,deep配置生效
        watch(() => person.job,(newValue,oldValue) => {
            console.log("涨薪了:",newValue,oldValue);
        },{
            deep: true
        });
        // 返回对象
        return {
            sum,
            msg,
            person
        };
    },
};
</script>

<style scoped>
    .person{
        margin: 20px 0;
        padding: 20px;
        line-height: 32px;
        background-color: blanchedalmond;
    }
</style>