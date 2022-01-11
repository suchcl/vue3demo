<template>
    <div class="profile">
        <h3>用户信息</h3>
        <h4>姓名:{{person.name}}</h4>
        <p>年龄:{{person.age}}</p>
        <p v-if="school">学校:{{school}}</p>
        <p v-if="job">工作:{{job}}</p>
        <button @click="commitUserInfo">提交用户信息</button>
        <slot name="student"></slot>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
    props: ["school", "job"],
    setup(props,context) {
        let person = reactive({
            name: "Nicholas Zakas",
            age: 18,
        });

        function commitUserInfo() {
            console.log("提交用户信息了");
            context.emit("showUserInfo", person);
        }
        return {
            person,
            commitUserInfo,
        };
    },
};
</script>