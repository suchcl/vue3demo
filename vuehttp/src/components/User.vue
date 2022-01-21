<template>
    <div class="user">
        <h3>用户</h3>
        <button @click="getUser">获取用户信息</button>
        <ul>
            <li v-for="itemm in userList" :key="itemm.id">{{ itemm.username }}</li>
        </ul>
        <button @click="getProvince">获取省份</button>
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
            axios.get("/getUser", {
                params: {
                    id: 3
                }
            }).then((res) => {
                const { userInfo } = res.data.data;
                this.userList = userInfo;
            });
        },

        getProvince() {
            axios.post("/getCity", {
                code: "130400"
            }).then(function (res) {
                console.log("post请求了");
                console.log(res);
            });
        }
    }
}
</script>