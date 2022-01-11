<template>
  <h3>用户基本信息：</h3>
  <h4>姓名：{{ username }}</h4>
  <p>年龄：{{ age }}</p>
  <div class="job">
    <h4>岗位: {{ job.type }}</h4>
    <p>工资: {{ job.salary }}</p>
  </div>
  <ul class="btn">
    <li>
      <button class="btn" @click="changeUserInfo">修改用户信息</button>
    </li>
    <li>
      <button class="btn" @click="changeObj">修改对象信息</button>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let username = ref("Nicholas Zakas");
    let age = ref(18);

    let job = ref({
      type: "前端开发工程师",
      salary: "30K",
    });
    function changeUserInfo() {
      username.value = "Kobe";
      age.value = 26;
      console.log(username);
      console.log(age);
      console.log(`修改后的信息:姓名：${username.value},年龄：${age.value}`);
    }

    function changeObj() {
      console.log(job.value);
      job.value.type = "Java开发工程师";
      job.value.salary = "16k";
      console.log(job.value);
    }

    return {
      username,
      age,
      changeUserInfo,
      job,
      changeObj,
    };
  },
};
</script>

<style scoped>
ul,
ol,
li {
  list-style: none;
}
.btn-area li {
  margin-bottom: 20px;
}
</style>
