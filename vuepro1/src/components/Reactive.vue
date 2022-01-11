<template>
    <div class="userinfo">
        <h4>用户基本信息</h4>
        <ul class="profile">
            <li>姓名：{{ user.username }}</li>
            <li>年龄：{{ user.age }}</li>
            <li v-if="user.height">身高：{{ user.height }}</li>
            <li v-if="user.job">工作:{{user.job}}</li>
        </ul>
        <ul class="btn-area">
            <li>
                <button class="btn" @click="changeProfile">修改用户信息</button>
            </li>
            <li>
                <button class="btn" @click="addJob">给用户添加一个工作的属性</button>
            </li>
            <li>
                <button class="btn" @click="removeHeight">移除掉身高属性</button>
            </li>
        </ul>
        <h4>水果</h4>
        <ul class="fruits">
            <li v-for="(item,index) in fruit" :key="index">{{item}}</li>
        </ul>
        <ul class="btn-area">
            <li>
                <button class="btn" @click="changeFirstFruit">将第一个水果改为桃子</button>
            </li>
            <li>
                <button class="btn" @click="removeLastFruit">将最后一个水果删除掉</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
export default {
    name: "Reactive",
    setup() {
        let user = reactive({
            username: "Nicholas Zakas",
            age: 18,
            height: 1.88
        });

        let fruit = reactive(["苹果","西瓜","哈密瓜"]);

        function changeProfile() {
            user.username = "Hanmeimei";
            user.age = 26;
            user.height = 2.01
            console.log(user);
        }
        function addJob(){
            user.job = "人民教师";
        }

        function removeHeight(){
            delete user.height;
        }

        function changeFirstFruit(){
            fruit[0] = "桃子";
        }

        function removeLastFruit() {
            fruit.pop();
        }
    
        return {
            user,
            changeProfile,
            addJob,
            removeHeight,
            fruit,
            changeFirstFruit,
            removeLastFruit
        };
    }
}
</script>
<style scoped>
h4 {
    text-align: left;
}
.profile li {
    text-align: left;
    line-height: 32px;
}
</style>