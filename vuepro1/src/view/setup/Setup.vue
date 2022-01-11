<template>
    <div class="user">
        <h3>Setup函数测试的父组件</h3>
        <user-profile
            school="美华大学"
            job="Teacher"
            @showUserInfo="showUserInfo"
        >
            <template v-slot:student>
                <div class="student">我是一个学生,通过slot传递的数据</div>
            </template>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from "./SetupChild.vue";
export default {
    components: {
        UserProfile,
    },
    setup() {
        function showUserInfo(data) {
            console.log("父组件调用函数了");
            console.log(data);
        }
        return {
            showUserInfo,
        };
    },
};
</script>