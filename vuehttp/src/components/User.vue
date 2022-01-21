<template>
    <div class="user">
        <h3>用户</h3>
        <button @click="getUser">获取用户信息</button>
        <ul>
            <li v-for="itemm in userList" :key="itemm.id">{{ itemm.username }}</li>
        </ul>
    </div>
</template>

<script>
import axios from "../assets/js/http";
export default {
    data() {
        return {
            msg: "hello",
            userList: []
        }
    },
    methods: {
        getUser() {
            axios.get("/getUser").then((res) => {
                const { userInfo } = res.data.data;
                this.userList = userInfo;
            });
        }
    }
}
</script>