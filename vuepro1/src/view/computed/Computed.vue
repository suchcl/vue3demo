<template>
    <div class="computed">
        <ul class="user">
            <li>姓: <input type="text" v-model="person.firstname"></li>
            <li>名: <input type="text" v-model="person.lastname"></li>
        </ul>
        <!-- <div class="fullname">全名: {{fullname}}</div> -->
        <!-- <div class="fullname">全名: {{person.fullname}}</div> -->
        <h4>可以修改姓名的全名</h4>
        <div class="fullname">全名: <input type="text" v-model="person.fullname"></div>
    </div>
</template>

<script>
// 导入计算属性computed模块
import { reactive,computed } from "@vue/reactivity";
export default {
    // Vue2中计算属性的实现方式
    // computed: {
    //     fullname() {
    //         return this.person.firstname + " " + this.person.lastname;
    //     },
    // },
    setup() {
        let person = reactive({
            firstname: "Nicholas",
            lastname: "Zakas",
        });

        // Vue3中计算属性的实现 简单实现,只有读取属性,没有涉及到修改属性,就是只实现了get方法
        // const fullname = computed(() => {
        //     return `${person.firstname} ${person.lastname}`;
        // });

        // 这里的返回全名的计算属性,还可以优化,因为全名也是person的全名,优化如下
        // 模版种也应该修改一下,然后只导出person就可以了
        // person.fullname = computed(() => {
        //     return `${person.firstname} ${person.lastname}`
        // });

        // 继续优化,既可以读取,也可以修改
        person.fullname = computed({
            get(){
                return `${person.firstname} ${person.lastname}`
            },
            set(value){
                const newArr = value.split(" ");
                person.firstname = newArr[0];
                person.lastname = newArr[1];
            }
        });

        return {
            person
            // fullname
        };
    },
};
</script>